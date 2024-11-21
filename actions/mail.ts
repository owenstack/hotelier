import { emailOtpString } from "@/components/emails/email-otp";
import { resetPasswordString } from "@/components/emails/password-reset";
import { env } from "@/lib/env";
import { createTransport } from "nodemailer";

const transporter = createTransport({
	host: env.SMTP_SERVER_HOST,
	port: 587,
	auth: {
		user: env.SMTP_SERVER_USER,
		pass: env.SMTP_KEY,
	},
});

export async function sendVerificationOTP(otp: string, email: string) {
	try {
		const body = await emailOtpString(otp);
		const mail = await transporter.sendMail({
			from: env.EMAIL_FROM,
			to: email,
			subject: "Sign in to Hotelier",
			html: body,
		});
		if (!mail) return { error: "Failed to send mail" };
		return { success: true, message: "Email sent successfully" };
	} catch (error) {
		console.error(error);
		return { error: "Internal server error" };
	}
}

export async function sendResetPassword(
	userName: string,
	inviteLink: string,
	email: string,
) {
	try {
		const body = await resetPasswordString({ userName, inviteLink });
		const mail = await transporter.sendMail({
			from: env.EMAIL_FROM,
			to: email,
			subject: "Reset your password",
			html: body,
		});
		if (!mail) return { error: "Failed to send mail" };
		return { success: true, message: "Email sent successfully" };
	} catch (error) {
		console.error(error);
		return { error: "Internal server error" };
	}
}