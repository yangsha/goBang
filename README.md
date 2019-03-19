# goBang(五子棋)
简介：双人游戏 两个玩家交互点击 每位玩家点击会显示不同的棋子  分别用 'X' 和 'O'来代替；
用到的技术：(Redux,immutable,reducer)+react

状态存储采用immutable中的Record,形式如下：
const GameRecord = Record({
  board: Range(0, Row * Col)
    .toList()
    .map(() => ' '),
  currentPlayer: 'X',
  gameState: 'fail',
  gameStart: 'Start Game'
})
其中board用来记录整个棋盘的状态，用以判断整个游戏的状态；currentPlayer用于记录当前的玩家，
gameStart用来记录当前的游戏状态，gameStar用于记录游戏是否开始；

采用useReduxer来管理整个状态，状态的改变只能通过派发action，调用setPointReducer函数
const [state, dispatch] = useReducer(setPointReducer, getInitState())

如何判断游戏输赢？
每下一个棋子，判断该棋子是否周围的棋子连成五子，不需要判断整个棋盘，只需要判断该棋子的上下
、左右、斜对角五子范围内是否连城五子即可；


