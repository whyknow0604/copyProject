import React from 'react';
import Card from '../component/Card';
import axios from 'axios';

class Company extends React.Component {
	
	
	constructor(){
		super();
		
		this.state = {
			companyList : []
		}
	}
	
	componentDidMount(){
		
		
		
		axios.get('http://localhost:4000/company')
			.then((response)=>{
				const data = this.state.companyList.concat(response.data.company);
				this.setState({companyList : data })
		})
		
	}
	
    render(){
	
	const {companyList} = this.state;
		
	const list = companyList.map((v,i) =>{
	
		return(
			<Card 
				company={v.name}
				recruit={v.recruit}
				rebate={v.rebate}
				recom={v.recommendation}
				favorite={v.favortie}
				key={v.id}
				/>

			
		)
	})
        return(
			<div>
				<div className="list">
					{list}
				</div>
			</div>
        )
    }
}

export default Company;