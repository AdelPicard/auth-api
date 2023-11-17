const AuthButton = ({children, ...props}:any) => {
    return ( 
        <div className="flex flex-col">
            <button className="bg-[#4b68c9] mt-[8px] p-2 rounded-[4px] hover:bg-[#4b68c9]/80 text-white font-semibold" {...props}>{children}</button>
        </div>
     );
}
 
export default AuthButton;