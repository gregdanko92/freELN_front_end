const url = 'https://freeln.herokuapp.com/api/programs';
//store logic to make api calls (fetch/axios here)
class ProgramModel {
    static all() {
        // fetch method uses a JS promise
        // when we call fetch, fetch is promising that at some point there will be a response
        return fetch(url)
            .then((response)=>{ 
                return response.json() //convert response to json
            })
            .catch((err)=>{
                console.log(err)
                // show user a message describing error

            })
    }
    // will make  fetch call to get a single game by it's id
    static show(programId){
         return fetch(`${url}/${programId}`)
            .then((response)=> response.json())
            .catch((err)=>{
                console.log(err)
            })
                
    }
    // static show(programId,teamId){
    //      return fetch(`${url}/${programId}/${teamId}`)
    //         .then((response)=> response.json())
    //         .catch((err)=>{
    //             console.log(err)
    //         })
                
    // }
}
export default ProgramModel;
