import {
	sendInviteEmail,
	sendResetPassword,
	sendVerificationOTP,
} from "@/actions/mail";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin, emailOTP, organization } from "better-auth/plugins";
import prisma from "./db";
import { env } from "./env";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
		sendResetPassword: async ({ user, url }, request) => {
			await sendResetPassword(user.name, url, user.email);
		},
	},
	plugins: [
		organization({
			allowUserToCreateOrganization: async (user) => {
				const dbUser = await prisma.user.findUnique({
					where: { id: user.id },
				});
				return dbUser?.role === "owner";
			},
			async sendInvitationEmail(data, request) {
				const inviteLink = `https://${process.env.VERCEL_PRODUCTION_URL}/invite/${data.id}`;
				sendInviteEmail(
					data.inviter.user.name,
					inviteLink,
					data.inviter.user.email,
					data.organization.name,
					data.email,
				);
			},
		}),
		admin(),
		emailOTP({
			async sendVerificationOTP({ email, otp }) {
				sendVerificationOTP(otp, email);
			},
		}),
		nextCookies(),
	],
	socialProviders: {
		google: {
			clientId: env.GOOGLE_CLIENT_ID,
			clientSecret: env.GOOGLE_CLIENT_SECRET,
		},
	},
});
