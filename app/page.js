// import AddPassenger from "@/components/AddPassenger";
import ValidateFn from "@/components/validateFn";

import Navbar from "@/components/Containers/Navbar";
import AddPassenger from "@/components/AddPassenger";
import Test from "@/components/test";
// import OTP from "@/components/TestInput";

export default function Home() {
  
    return (
        <main className="flex flex-col items-center justify-between">
            <Navbar/>
            <Test/>
            {/* <OTP/> */}
            {/* <AddPassenger /> */}
            {/* <ValidateFn/> */}
            
        </main>
    );
}
