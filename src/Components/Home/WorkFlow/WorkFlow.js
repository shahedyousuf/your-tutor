import React from 'react';
import './WorkFlow.css'
import number1 from '../../../images/number/number1.jpg'
import number2 from '../../../images/number/number2.jpg'
import number3 from '../../../images/number/number3.jpg'
import number4 from '../../../images/number/number4.jpg'

const WorkFlow = () => {
    return (
        <div className='container'>
            <h2 className='fw-bold text-primary bg-light mt-2 p-2'>Our course flow</h2>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src={number1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Identify task</h5>
                            <p className="card-text">Students are encouraged to initiate and focus of the session.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={number2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Breaking tasks in parts</h5>
                            <p className="card-text">Provide an opportunity to break the tasks into organizable pieces.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={number3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Setting agenda</h5>
                            <p className="card-text">Discuss with the student about the amount of time necessary to complete each part of task.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src={number4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Thought process</h5>
                            <p className="card-text">Student need to summarize the process of addressing task.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WorkFlow;