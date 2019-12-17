
// You are a director of a large company and you have to organize the meetings . there 
// are n meetings for today. Meetubg I should start at time start[i]
// and end at time end[i], Unfortunately there are only two meeting rooms today. We consider meetings a and b intersecting in time of max[start[a], start[b]] >= meeting(end[a],end[b])
// you cant hold two intersecting meetings in the same room. Is it  possible to hold all meetings using only two rooms?
// print 1 in case of positive answer and 0 otherwise

// example meeting([1,2,4],[2,3,5]) => 1
//         meeting([1,2,2,1],[2,3,3,2]) => 0

function meeting(start, end){
    if(start.length !== end.length) return 0
   let array= [];
    
//     making 2d  array
   for (let i =0 ; i< start.length; i++){
    array.push([start[i],end[i]])
   }
// sorting according to start time
   let sorted=array.sort(function(el1,el2){
        return el1[0] - el2[0]
    })
    let maxCount = 1   // if maxCount > 2 we need more rooms
    
    
    for(let i = 0; i< sorted.length; i++){
        let count = 1   // check room needed for time start : sorted[i][0] - end :sorted[i][1]
        for(let j = i+1; j<sorted.length; j++){
            if (count > 2) return 0
            if (sorted[i][1] < sorted[j][0]) break;
            if(sorted[i][1] >= sorted[j][0]){
                count ++
            }
            maxCount = Math.max(maxCount, count)
            
        }
    }
    if (maxCount <= 2 ){ 
    return 1
    }else{
        return 0
        }
}