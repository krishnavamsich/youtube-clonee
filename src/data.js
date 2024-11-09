export const API_KEY="AIzaSyACe-8PTv9iJDDv7fTUj9JDkNOf5eBQmjc"

export const value_converter = (value)=>{
    if(value>=1000000)
    {
        return Math.floor(value/1000000)+ "M"  ;
      }
      else if(value>=1000){
        return Math.floor(value/1000)+ "K"  ;
      }
      else{
        return value;
      }
}