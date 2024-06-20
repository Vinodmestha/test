// import AddPassenger from "@/components/AddPassenger";
import ValidateFn from "@/components/validateFn";

import Navbar from "@/components/Containers/Navbar";

export default function Home() {
  
    return (
        <main className="flex flex-col items-center justify-between">
            {/* <AddPassenger /> */}
            <Navbar/>
            <ValidateFn/>
            
        </main>
    );
}
