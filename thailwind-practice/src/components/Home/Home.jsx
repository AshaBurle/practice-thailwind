import { useReducer } from "react"
import { Link } from "react-router-dom"

const Home =()=>{

const [state,setState] = useReducer((state,newState)=>({...state,...newState}),{
    userData:{
        name:"asha",
        location:"vzm"
    },
    userList :[],
    actionType:"add",
    currentindex :0,
    searchQuery:"" ,
    deleteUser:{},
    tab:0 
})

const handleChange=(e,name)=>{
    let {userData} = state 
    userData[name] = e.target.value 
    setState({userData})

}
const handleAdd =()=>{
    const {userData,userList} = state 
    if (state.actionType === "edit"){
        userList[state.currentindex] = userData
       
    } else{
        let tempObj = JSON.parse(JSON.stringify(userData))
        userList.push(tempObj)
 }
    let tempObj = {
    name:"",
    location:""
}
   setState({userList,actionType:"add" , userData:tempObj})

}

const handleEdit=(item,index)=>{
    let {userData} = state 
    userData = JSON.parse(JSON.stringify(item))
    
    setState({userData,actionType:"edit",currentindex:index})
    console.log(userData)
}

const handleDelete=(index)=>{
    let {userList} = state 
        let filteredUsers = userList.splice(index,1)
    setState({userList:filteredUsers})
    
   
}

    
let displayUser =  state.userList.filter((v)=>v.name.toLowerCase().includes(state.searchQuery.toLowerCase()) || v.location.toLowerCase().includes(state.searchQuery.toLowerCase())).map((item,index)=>{
    return <tr className="flex space-x-4 text-white" key={index}>
        <td>{item.name}</td>
        <td>{item.location}</td>
        <button className="border-black" type="button" onClick={()=>handleEdit(item,index)}>Edit</button>
        <button className="border-black" type="button" onClick={()=>handleDelete(index)}>Delete</button>
    </tr>
})      
    
const handleSearch=(e)=>{
    let {searchQuery} = state 
    searchQuery = e.target.value 
    setState({searchQuery})

}


return(
    <div  className="bg-gray-950">
          <h1>ADD USERS</h1>
          <input className="border-8 border-stone-950"  placeholder="search user" type="text" onChange={(e)=>handleSearch(e)}/>
          <input className="border-8 border-stone-950" type="text" id="name" onChange={(e)=>handleChange(e,"name")} value={state.userData.name} />
          <label id="name">Name</label>
          <input className="border-8 border-stone-950 "  type="text" id="location" onChange={(e)=>handleChange(e,"location")} value={state.userData.location} />
          <label id="location" > location</label>

          <button className="text-white border-white " type="button" onClick={handleAdd}>ADD</button>
          
          <Link to="/login"><button className="border-2 border-white text-orange-200 rounded mr-4 ml-4" >Go to login</button></Link> 
          <Link to="/about" ><button className="border-2  border-white text-orange-200 rounded mr-4"  >go to about</button></Link>

          <div>{displayUser}</div>
          <div>
          {state.tab === 1 && <h1 className="text-orange-500">welcome to login</h1>}
          {state.tab === 2 && <h2 className="text-orange-500" > about</h2>}
          </div>

          
          
        </div>
    )
}

export default Home 