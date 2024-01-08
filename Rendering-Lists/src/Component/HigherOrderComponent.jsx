import React from 'react'
import '../App.css'

export default class HigherOrderComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}

            ],
        }
        
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((el) => (
            <div key={el.id} >
                <li className="list-elements" >
                    <span >Id: {el.id}</span>
                    <span >Name : {el.name}</span>
                    <span >User Type: {el.user_type}</span>
               </li>
            </div>
        ));
        return mapRows;
    };
    renderFilter=()=>{
        const DesignFilter = this.state.userData.filter((el)=>el.user_type==='Designer');
        const design = DesignFilter.map((el)=>(
            <div key={el.id} >
            <li className="list-elements" >
                <span >Id: {el.id}</span>
                <span >Name : {el.name}</span>
                <span >User Type: {el.user_type}</span>
           </li>
        </div>
        ))
        return design;
    }
    renderLetter=()=>{
        const letterFilter = this.state.userData.filter((el)=>el.name[0]==='J');
        const letter = letterFilter.map((el)=>(
            <div key={el.id} >
            <li className="list-elements" >
                <span >Id: {el.id}</span>
                <span >Name : {el.name}</span>
                <span >User Type: {el.user_type}</span>
           </li>
        </div>
        ))
        return letter;
    }
    FilterAge=()=>{
        const ageFilter = this.state.userData.filter((el)=>el.age>28 && el.age<=50);
        const age = ageFilter.map((el)=>(
            <div key={el.id} >
            <li className="list-elements">
                <span>Id: {el.id}</span>
                <span>Name : {el.name}</span>
                <span>User Type: {el.user_type}</span>
           </li>
        </div>
        ))
        return age;
    }
    renderExperience=()=>{
        const age = this.state.userData.filter((el)=>el.user_type==='Designer').reduce((acc,el)=>acc+el.years,0)
        return(
            <h2>{age}</h2>
        )
    }

    render() {
        return (
        // instead of a parent div tag, we can also use React.Fragment
          <div>
            <h1>Display all items</h1>
            <div className="display-box" style={{border:"2px solid black", width:"600px", margin:"auto",color:"blue"}} >
            <ul style={{padding:"5px"}}> {this.renderItems()} </ul>
            </div>
            <h1>Display based on user type</h1>
            <div className="display-box" style={{border:"2px solid black", width:"600px", margin:"auto",color:"blue"}}>
            <ul style={{padding:"5px"}}>{this.renderFilter()} </ul>
            </div>
            <h1>Filter all data starting with J</h1>
            <div className="display-box" style={{border:"2px solid black", width:"600px", margin:"auto",color:"blue"}}>
            <ul style={{padding:"5px"}}>{this.renderLetter()} </ul>
            </div>
            <h1>Filter all data based on the age greater than 28 and age less then equal to 50</h1>
            <div className="display-box" style={{border:"2px solid black", width:"600px", margin:"auto",color:"blue"}}>
            <ul style={{padding:"5px"}}>{this.FilterAge()} </ul>
            </div>
            <h1>Find the total years of the designers</h1>
            <div className="display-box" style={{border:"2px solid black", width:"600px", margin:"auto",color:"blue"}}>
            <ul style={{padding:" 0px 5px"}}>{this.renderExperience()} </ul>
            </div>
          </div>
        )}
    
}
