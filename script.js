let reputation = 100;
let gold = 50;

function cheat() {
  let cost = Math.floor(Math.random() * 20) + 5;
  let caught = Math.random() < 0.3; // 30% 被举报
  gold -= cost;
  if (caught) {
    reputation -= 30;
    document.getElementById("result").innerText =
      `你作弊被举报了！扣除30声誉，当前声誉：${reputation}`;
  } else {
    reputation += 10;
    document.getElementById("result").innerText =
      `作弊成功，增加10声誉。当前声誉：${reputation}`;
  }
}

function report() {
  let success = Math.random() < 0.5;
  if (success) {
    reputation += 20;
    document.getElementById("result").innerText =
      `举报成功，获得20声誉！当前声誉：${reputation}`;
  } else {
    reputation -= 10;
    document.getElementById("result").innerText =
      `举报失败，浪费时间扣10声誉。当前声誉：${reputation}`;
  }
}
