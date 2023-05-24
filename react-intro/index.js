/*const Footer = (props) => {
    return(
        <footer>
            Copyright {props.year} - {props.owner}
        </footer>
    )
}*/
const Footer = ({year, owner}) => {
    return(
        <footer>
            Copyright {year} - {owner}
        </footer>
    )
}

const Button = ({text, classProp, onClick}) => {
   /* const onClick = (e) => {
        console.log(e)
    }*/
    return(
        <button type="button" className={`btn btn-lg px-4 gap-3 ${classProp}`} onClick={onClick}>{text}</button>
    )
}

const Row = ({ text, type }) => {
    return (
        // JSX
        <div class="row mt-3">
            <label>{text}
                <input type={`${type}`} class="form-control" placeholder={`Saisir votre ${text}`} />
            </label>
        </div>
    )
}


const ReactAppFromCDN = () => {
    const onClickPrimary = ()  => {
        console.log("Primary")
    }
    const onClickSecondary = ()  => {
        console.log("Secondary")
    }
    return(
        <div class="container">
        <div class="px-4 py-5 my-5 text-center">
         <h1 class="display-5 fw-bold"> React CDN</h1>
             <div class="col-lg-6 mx-auto">
                 <p class="lead mb-4">React Component</p>
                 <div class="d-grid gap-2 d-sm-flex justify-content-sm-center"> 
                  {/*<button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                  <button type="button" class="btn btn-outline-success btn-lg px-4">Secondary</button> */}
                    <Button text="Primary" classProp="btn-primary" onClick={onClickPrimary}/>
                    <Button text="Secondary" classProp="btn-outline-success" onClick={onClickSecondary}/>
                 </div>
             </div>
             <Row text="nom" type="text"/>
             <Row text="courriel" type="email"/>
             <Row text="mot de passe" type="password"/>
            {/* <div class="row mt-3">
                 <label>Nom
                     <input type="text" class="form-control" placeholder="Saisir votre nom"/>
                 </label>
             </div>
             <div class="row mt-3">
                 <label>Courriel
                     <input type="email" class="form-control" placeholder="Saisir votre courriel"/>
                 </label>
             </div>  
             <div class="row mt-3">
                 <label>Mot de passe
                     <input type="password" class="form-control" placeholder="Saisir votre mot de passe"/>
                 </label>
             </div> 
                */}
             <Footer year="2023" owner="Peter"/>
             {/*<!--abc--> JSX*/} 
         </div>
     </div>
    )
}

ReactDOM.render(<ReactAppFromCDN/>, document.querySelector('#root'));