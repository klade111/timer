import React, { Component } from 'react'

class Timer extends Component {
    state={
        times: 0 ,
        interval: null 
      
    };
    timeenms = ms => {
        const msPerSecond = 1000;
        const msPerMinute = msPerSecond * 60;
        const msPerHour = msPerMinute * 60;
    
        const hours = Math.floor(ms / msPerHour);
        const hoursRest = ms % msPerHour;
        const minutes = Math.floor(hoursRest / msPerMinute);
        const minutesRest = hoursRest % msPerMinute;
        const seconds = Math.floor(minutesRest / msPerSecond);
    
        return (
          String(hours).padStart(2, "0") +
          ":" +
          String(minutes).padStart(2, "0") +
          ":" +
          String(seconds).padStart(2, "0")
        );
      };
    //   setInterval(
    //       () => {
    //     this.setState({
    //         times:this.state.times + 1
    //     })
    // }, 
    //  1000;
    //   )
start = ()=>{
    
        if(this.state.interval){
            clearInterval(this.state.interval);
            this.setState({interval:0})
        }else{
    const interval = setInterval(() => {
        this.setState({ times: this.state.times + 1000 });
      }, 1000);
    this.setState({interval})}
}
reset =()=>{
    clearInterval(this.state.interval);
    this.setState({
        times:0,
        interval:null


    });

    
}

    
  
         

        

    render() {
        return (
            <div className='timer'>
                <div className="number-timer">{this.timeenms(this.state.times)}</div>
                 <div className='text-inner-timer'>
                    <div className='item'>Hour</div>
                    <div className='item'>minutes</div>
                    <div className='item'>seconds</div>
                 </div> 
                  
                    <input className="btn btn-primary" type="button" value={this.state.interval?"pause":"Start"} onClick={this.start}/>
                    <input className="btn btn-primary" type="button" value=" Reset"  onClick={this.reset}/>
                  
            </div>
        )
    }
}
export default Timer