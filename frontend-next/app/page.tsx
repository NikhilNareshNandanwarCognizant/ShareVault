import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import Footer from '@/components/layout/Footer';
import PageContainer from '@/components/layout/PageContainer';
import ActiveView from '@/components/ActiveView';
import { FileTypeProvider } from '@/context/FileTypeProvider';

export default function Page() {
    return (
        <FileTypeProvider>
            <div className="app-backdrop flex min-h-screen flex-col">
                <Navbar />
                <Hero />
                <PageContainer className="flex-1 pb-16">
                    <ActiveView />
                </PageContainer>
                <Footer />
            </div>
        </FileTypeProvider>
    );
}
