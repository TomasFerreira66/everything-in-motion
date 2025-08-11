import GradientBackground from "../components/ui/background1";
import FloatingParticlesBackground from "../components_backgrounds/bg2";
import AuroraBorealisBackground from "../components/ui/background3"; 

export default function Page() {
    return (
        <div>

            <section className="h-96">
                <FloatingParticlesBackground className="rounded-lg">
                    <div className="flex items-center justify-center h-full">
                        <h1>Hero content</h1>
                    </div>
                </FloatingParticlesBackground>
            </section>


            <section className="h-96">
                <GradientBackground className="rounded-lg">
                    <div className="flex items-center justify-center h-full">
                        <h1>Hero content</h1>
                    </div>
                </GradientBackground>
            </section>

            <section className="h-96">
                <AuroraBorealisBackground className="rounded-lg">
                    <div className="flex items-center justify-center h-full">
                        <h1>Hero content</h1>
                    </div>
                </AuroraBorealisBackground>
            </section>

        </div>
    );
}