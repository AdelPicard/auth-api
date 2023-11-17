const AuthCard = ({ title, children }:any) => {
    return ( 
        <div className="bg-white text-black w-[400px] p-[20px] rounded-md">
            <h2 className="text-center font-bold text-[24px]">{title}</h2>
            {children}
        </div>
     );
}
 
export default AuthCard;