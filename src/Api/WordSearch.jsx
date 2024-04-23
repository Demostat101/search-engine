
// const ID = import.meta.env.VITE_REACT_APP_ENGINE_ID;



export const SearchData = async (text)=>{
    let url = (`https://www.googleapis.com/customsearch/v1?key=AIzaSyDe9DQOuJqmo2ogY3QCKoFGozV8HuUO2rw&cx=f57abf813584a44d8&q=${text}`)
    try{
        const data = await fetch(url);
        console.log(data);
        const result=data.json();
        return result;
    }catch(error){
        console.log(error);
    }
    
}