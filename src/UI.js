import React from 'react';
import './App.css';

class UI extends React.Component {
      
      render() {
		  const togglecheck1 = !this.props.checked1 ? 'hidden-check1' : '';
    	  const togglecheck2 = !this.props.checked2 ? 'hidden-check2' : '';
		  const togglecheck3 = !this.props.checked3 ? 'hidden-check1' : '';
    	  const togglecheck4 = !this.props.checked4 ? 'hidden-check2' : '';
		  const dos = this.props.todos;
		  const currentPage = this.props.currentPage;
		  const todosPerPage = this.props.todosPerPage;
        // Logic for displaying current todos
          const indexOfLastTodo = currentPage * todosPerPage;
          const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
          const currentTodos = dos.slice(indexOfFirstTodo, indexOfLastTodo);
		  
		 const Todos = currentTodos.map(el => (
		   <li key = {el.id} ref={(inp)=> {this.liElement = inp}}>
		      	<div className="card" >
										<h3 className="card-title" style={{marginButtom: '10px'}}> {el.title} </h3>
			   							<h5> {el.category} </h5>
										<p>Likes :{el.likes} </p> 
										<p>DisLikes :{el.dislikes} </p>
										<div className="progress">
										  <progress id="avancement" className="progressBar" value={(el.likes * 100/ (el.likes + el.dislikes)).toFixed(2)} max="100"></progress>
										</div><br />
										<i className={el.Active ? "fa fa-thumbs-up" : "fa fa-thumbs-down"} onClick={() =>this.props.Opinion(el.id)} style={{marginButtom: '10px'}}></i><br />
										<button className='btn-full' onClick={() => this.props.deletehandle(el.id)}> Dellete</button>
			
				</div>
           </li> 
            ));
        const buttonNextPrevious = <li>
									 <button onClick={this.props.handleClickNext}>Next </button>
									  <button onClick={this.props.handleClickPrevious}>Previous </button>
								</li> ;

        return (
          <div>
			<div className="row">
				<ul className="btn-next-previous">
					 {buttonNextPrevious} 
				</ul>
				<ul>
				  	{Todos}
			
				</ul> 
			</div>	
				<div className="toggle">
						<label>Comedy</label>
						<input type="checkbox"   checked={ this.props.checked } onChange={ this.props.handleChange1 }/><br />
						<label>Animation</label>
						<input type="checkbox"  checked={ this.props.checked } onChange={ this.props.handleChange2 } /><br />
						<label>Thriller</label>
						<input type="checkbox"  checked={ this.props.checked } onChange={ this.props.handleChange3 } /><br />
						<label>Drame</label>
						<input type="checkbox"  checked={ this.props.checked } onChange={ this.props.handleChange4 } />
			
			  			<div className={togglecheck1 }>
							{currentTodos.map(el => (
						 		<span key = {el.id} ref={(inp)=> {this.liElement = inp}}>
							
									<h3 className="card-title"> 
										{el.category === 'Comedy' ? el.title : null} 
									</h3>
								</span> ))}
							</div>
							<div className={togglecheck2 }>
				  			{currentTodos.map(el => (
						 	<span key = {el.id} ref={(inp)=> {this.liElement = inp}}>
							  <h3 className="card-title"> 
								  {el.category === 'Animation' ? el.title : null} </h3>
							</span> ))}
						</div>
			  			<div className={togglecheck3 }>{currentTodos.map(el => (
								<span key = {el.id} ref={(inp)=> {this.liElement = inp}}>
									<h3 className="card-title"> {el.category === 'Thriller' ? el.title : null} </h3>
							  	</span> ))}
						</div>
			  			<div className={togglecheck4 }>{currentTodos.map(el => (
						 		<span key = {el.id} ref={(inp)=> {this.liElement = inp}}>
									<h3 className="card-title"> {el.category === 'Drame' ? el.title : null} </h3>
							  	</span> ))}
						</div>
				</div>
				
          </div>
        )
      }
    }
export default UI;