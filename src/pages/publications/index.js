import React, { useEffect, useRef, useState } from "react";
import projectStyles from "../projects/styles.module.css";
import styles from "./styles.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Link from "@docusaurus/Link";
import publications from "../../data/_Publications";
import _ from 'lodash';

function Publications() {
	const name = "S. Chatzopoulos"; // TODO

	const makeBold = (input) => {
	       var re = new RegExp(name, 'g');
	       return (
	           input.replace(re, '<b className="colorSuccess">' + name + '</b>')
	       );
	}

	// console.warn(_.groupBy (publications, 'year') );
	return (
		<div id="publications">
	        <div className={projectStyles.projectPageHeader}>
	          <h2 className="underlineColorSuccess">My publications</h2>
	        </div>

	        <div className={styles.section} style={{ textAlign: 'center' }}>
	        {
	        	publications.map( (paper, i) => {
	        		return (
	        			<div key={ `paper-${i}` } className="col col--6 col--offset-3 margin-bottom--lg">
		                    <h3 className={styles.title}>{ paper.title }</h3>
		                    <div id="venue-year">
		                    	<em>{ paper.venue } &middot; { paper.year }</em>
	                    	</div>
	                    	<div dangerouslySetInnerHTML={{ __html:  makeBold(paper.authors) }}></div>
		                        {/*<span style="font-size: 0.8em">
		                            <a href='#' className="card-link disabled"><i className="fas fa-file"></i> Article</a>
		                            <a href="#" className="card-link disabled"><i className="fas fa-play"></i> Video</a>
		                            <a href="#" className="card-link disabled"><i className="fas fa-file-powerpoint"></i> Slides</a>
		                            <a href="#" className="card-link disabled"><i className="fas fa-code"></i> Code</a>
		                            <a href="#" className="card-link disabled"><i className="fas fa-database"></i> Data</a>
		                            <a href="#" className="card-link disabled"><i className="fas fa-external-link-square-alt"></i> App</a>
		                        </span>*/}
		                </div>
        			);
	        	})
	        }
	        </div>
      	</div>
	);

}

export default Publications;
