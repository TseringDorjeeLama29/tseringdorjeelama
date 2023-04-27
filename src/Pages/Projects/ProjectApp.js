import React from 'react'
import ProjectData from '../../Data/ProjectData';

export default function ProjectApp() {
    let CategoryApp = ProjectData.filter((val) => val.category === "app");

    return (
        <div className="container my-3">
            <div className="row">
                {CategoryApp.map((value) => (
                    <div className="col-lg-4 py-5">
                        <div className="card" >
                            <img src={value.img} className="project-img card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.body}</p>
                                <a href={value.link} target='_blank' className="btn btn-primary">click for link</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
