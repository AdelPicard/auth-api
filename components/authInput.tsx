const AuthInput = ({label,...props}:any) => {
    return ( 
        <div className="pt-4">
            <p className="text-[12px] text-[#585858] font-bold">{label}</p>
            <input className="bg-[#c2c2c2] w-[100%] h-[35px] rounded-[4px] pl-3 focus:outline-none placeholder-[#797979] text-[13px]" {...props}/>
        </div>
     );
}
 
export default AuthInput;