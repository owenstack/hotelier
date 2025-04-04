import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-b from-slate-50 to-slate-100">
			<div className="max-w-3xl w-full text-center space-y-8">
				{/* Logo/Brand Section */}
				<div className="space-y-2">
					<div className="flex items-center justify-center gap-3 mb-2">
						<h1 className="font-extrabold text-5xl tracking-tight text-primary">
							Betta-Rest
						</h1>
					</div>
					<p className="text-xl text-muted-foreground">
						Hotel Management System
					</p>
					<div className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full font-medium mt-2">
						Proof of Concept
					</div>
				</div>

				{/* Description Section */}
				<p className="text-lg max-w-xl mx-auto text-muted-foreground">
					A comprehensive solution for managing hotel operations, bookings, and
					guest experiences.
				</p>

				{/* CTA Button */}
				<div className="pt-4">
					<Button size="lg" className="px-8 py-6 text-lg gap-2 group">
						<Link href="/account" className="flex items-center">
							Get Started
							<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
						</Link>
					</Button>
				</div>

				{/* Features Section */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-left">
					<div className="p-4 rounded-lg border border-muted">
						<h3 className="font-semibold text-lg mb-2">Room Management</h3>
						<p className="text-muted-foreground">
							Real-time room status tracking and inventory control.
						</p>
					</div>
					<div className="p-4 rounded-lg border border-muted">
						<h3 className="font-semibold text-lg mb-2">Guest Services</h3>
						<p className="text-muted-foreground">
							Streamlined check-in/out process and guest profiles.
						</p>
					</div>
					<div className="p-4 rounded-lg border border-muted">
						<h3 className="font-semibold text-lg mb-2">Analytics</h3>
						<p className="text-muted-foreground">
							Detailed reports on occupancy rates and revenue.
						</p>
					</div>
				</div>
			</div>

			<footer className="mt-16 text-center">
				<p className="text-sm text-muted-foreground">
					A WIP for testing the concept and features of a hotel management
					system
				</p>
				<p className="text-xs mt-2 text-muted-foreground italic">
					For internal use only. All Rights Reserved
				</p>
			</footer>
		</main>
	);
}
