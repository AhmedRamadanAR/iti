import {usersData} from '../Utils/Data';

import { useState } from "react";
import CustomCard from './Card';
export default function SearchUsers(){


    const [searchState,setSearchState]= useState("");
    const [cardsState,setCardsState]=useState(usersData);
   const [showResetButton, setShowResetButton] = useState(false);

    const handleCards=(emailQuery)=>{
        if(!emailQuery){
       setCardsState(usersData);
       return;
        }
        const requiredCards=usersData.filter(cardItem=>{
              return cardItem.email.toLowerCase().includes(emailQuery.toLowerCase());
        });
        setCardsState(requiredCards)
    }
    const filteredCards = cardsState.map(cardItem => { 
  return <div className="col" key={cardItem.id}> {}
            <CustomCard {...cardItem}/>
        </div>;
  //  return <CustomCard cardItem={cardItem}/>;
//difference is I'm spreading all prop of card item to be called directly from props if i didn't do that
//it must call props.cardItem.img for example
});
   const handleSubmitClick= ()=>{
              
           handleCards(searchState)
          setShowResetButton(true);

   }
   const handleResetClick=()=>{
      setCardsState(usersData);
      setSearchState("");
      setShowResetButton(false)

   }
    return (
<>
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" rel="stylesheet"/>

<div className="container">
    <div className="row justify-content-center">
        <div className="col-md-8 ml-8 ms-8">
                <div className="input-group">
                    <input className="form-control form-control-lg"
                     type="search"
                      placeholder="Search" 
                      aria-label="Search"
                      value={searchState}
                      onChange={(e)=>{setSearchState(e.target.value) }}
                      />
                    <button className="btn btn-primary px-4" type="submit" onClick={handleSubmitClick}>
                            <i className="bi bi-search"></i>
                            search
                           
                        </button>
                      {showResetButton &&  
                      <button className="btn btn-danger px-4 mx-2" type="submit" onClick={handleResetClick}>
                            Reset
                           
                        </button>
                      
                      }
                </div>
        </div>
    </div>
       <div className="container my-5">
                    <div className="row g-4"> 
                        {filteredCards}
                    </div>
                </div>
</div>

</>
    );
}