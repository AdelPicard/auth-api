import {CircularProgress} from '@nextui-org/progress'

const LoadComp = ({estado}:any) => {

    const a = estado
    let b;

    if (a) {
        b = "text-white p-0 fixed flex bg-black t-0 l-0 w-[100%] h-[100%] flex items-center justify-center text-[20px] font-bold visible"
    } else {
        b = "text-white p-0 fixed flex bg-black t-0 l-0 w-[100%] h-[100%] flex items-center justify-center text-[20px] font-bold invisible"
    }

    return ( 
        <div className={b}>
            <CircularProgress aria-label="Loading..."/>
            <p></p>
        </div>
     );
}
 
export default LoadComp;