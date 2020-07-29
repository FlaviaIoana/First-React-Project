export function calculateWinner(squares) {
  // const style={
  //   backgroundColor: 'red'
  // }
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    let activities=[[0,false], [1,false], [2,false],[3,false],[4,false],[5,false],[6,false],[7,false],[8,false]];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      // console.log(a);
      // console.log(b);
      // console.log(c);
      // console.log(lines[i]);
      for (let j = 0; j < activities.length; j++){
      if (a==activities[j][0] || b==activities[j][0] || c==activities[j][0]) { activities[j][1]= true};
      // console.log(activities[j][1]);
      }
      // squares[a].style.color="yellow";
      // lines[i].style={style};
      // return squares[a];
      return activities;
    }
  }
  return false;
}
const squares = [
  null, null, null,
  'x', 'x', 'x',
  null, null, null
];
  // console.log(calculateWinner(squares));