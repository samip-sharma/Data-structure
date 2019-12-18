// James is a businessman. He is on a tight schedule this week. The week starts on Monday at 00:00 and ends on Sunday at 24:00. His schedule consists of M meetings he needs to take part in. Each of them will take place in a period of time, beginning and ending on the same day (there are no two ongoing meetings at the same time). James is very tired, thus he needs to find the longest possible time slot to sleep. In other words, he wants to find the longest period of time when there are no ongoing meetings. The sleeping break can begin and end on different days and should begin and end in the same week.
// You are given a string containing M lines. Each line is a substring representing one meeting in the schedule, in the format "
// "Sun 10:00-20:00
// Fri 05:00-10:00
// Fri 16:30-23:50
// Sat 10:00-24:00
// Sun 01:00-04:00
// Sat 02:00-06:00
// Tue 03:30-18:15
// Tue 19:00-20:00
// Wed 04:25-15:14
// Wed 15:14-22:40
// Thu 00:00-23:59
// Mon 05:00-13:00
// Mon 15:00-21:00"


// ans 

// the longest time slot when James can sleep is 505 minutes, since James can sleep from Tuesday 20:00 to Wednesday 04:25, which gives 8 hours and 25 minutes = 505 minutes.

// Example test:   'Sun 10:00-20:00\nFri 05:00-10:00\nFri 16:30-23:50\nSat 10:00-24:00\nSun 01:00-04:00\nSat 02:00-06:00\nTue 03:30-18:15\nTue 19:00-20:00\nWed 04:25-15:14\nWed 15:14-22:40\nThu 00:00-23:59\nMon 05:00-13:00\nMon 15:00-21:00'
// OK (505)

// Example test:   'Mon 01:00-23:00\nTue 01:00-23:00\nWed 01:00-23:00\nThu 01:00-23:00\nFri 01:00-23:00\nSat 01:00-23:00\nSun 01:00-21:00'
// OK (180)

// Your code is syntactically correct and works properly on the example test.






// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    const sortedList =["Mon","Tue","Wed","Thu","Fri","Sat", "Sun"]
    let arr= S.split("\n")
    let hash=[]
    arr.forEach(el=>{
        let day = el.split(" ")[0]
        let range = el.split(" ")[1]
        hash[day] ? hash[day].push(range) : hash[day] = [range]
    })

    let maxGap= 0
    let currentGap = 0
    
    sortedList.forEach((day)=>{
        
  
        ranges = sortFunction(hash[day])
        if(ranges.length <= 0){
            currentGap += 1440 
        }else{
            let startTimeFirstRange =  ranges[0].split("-")[0]
            currentGap += parseTimeInMinute(startTimeFirstRange)
            
            if(maxGap < currentGap) maxGap = currentGap;        
            
            for(let i = 0; i< ranges.length ; i++){
                currentGap = 0
                let currentEndTime = ranges[i].split("-")[1]
                
                if(i === ranges.length-1){
                    currentGap = 1440  - parseTimeInMinute(currentEndTime)
                    if(maxGap < currentGap) maxGap = currentGap;
                }else{
                    let nextStartTime = ranges[i+1].split("-")[0]
                    currentGap = parseTimeInMinute(nextStartTime) - parseTimeInMinute(currentEndTime)
                    
                    if(maxGap < currentGap) maxGap = currentGap;
                    
                }
            }

            
        }

    })
    
    function parseTimeInMinute(stringTime){
        let timeSplit = stringTime.split(":")
        let hour = parseInt(timeSplit[0])
        let minute = parseInt(timeSplit[1])
        
        return ( hour * 60 ) + minute
    }


    function sortFunction(ranges){
       if (ranges.length <= 1 ) return ranges
       return ranges.sort(function(a,b) {
       let diff = parseInt(a.slice(0,2)) - parseInt(b.slice(0,2))
       return diff > 0 ? 1 : -1
    });
    }
    
    
    return maxGap
}

