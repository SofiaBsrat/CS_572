export class Db{
game;
    games= [{_id:1,game:{name:'Rowing',schedule:[{stadium:'Asmara Stadium',date:'12/12/2018',time:'3pm'}]}},
    {_id:2,game:{name:'FootBall',schedule:[{stadium:'Rio Stadium',date:'12/13/2018',time:'2pm'}]}}
    ];
    constructor(){}
    getData(id){
        console.log(id);
        for(var g of this.games){
            console.log('here')
            if(g._id==id){
                this.game=g;
            }
        }
        console.log('here n')
        return this.game;
}


}