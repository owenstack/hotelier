"use client";

import Google from "@/assets/icons/google";
import { useToast } from "@/hooks/use-toast";
import { signIn } from "@/lib/auth.client";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

export function GoogleButton() {
	const router = useRouter();
	const { toast } = useToast();
	const [pending, setPending] = useState(false);

	const googleSignIn = async () => {
		setPending(true);
		try {
			await signIn.social(
				{
					provider: "google",
				},
				{
					onError: (ctx) => {
						toast({
							title: "Something went wrong",
							description: ctx.error.message,
							variant: "destructive",
						});
					},
					onSuccess: () => router.push("/auth/verify"),
				},
			);
			router.push("/auth/verify");
		} catch (error) {
			console.error(error);
			toast({
				title: "Something went wrong",
				description: "Internal server error",
				variant: "destructive",
			});
		} finally {
			setPending(false);
		}
	};

	return (
		<Button
			variant={"secondary"}
			disabled={pending}
			onClick={() => googleSignIn()}
		>
			{pending ? (
				<Loader className="w-4 h-4 animate-spin" />
			) : (
				<span className="flex">
					<Google className="mr-2" />
					Continue with Google
				</span>
			)}
		</Button>
	);
}