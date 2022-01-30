import { Nav } from ".";

type AppPageLayoutProps = {
    children: React.ReactNode;
}

export const AppPageLayout: React.FC<AppPageLayoutProps> = ({children}) => {
    return( 
        <div>
            <header className="App-header">
                <Nav /> 
            </header>
            <main>        
                {children}
            </main>
        </div>       
    );
};