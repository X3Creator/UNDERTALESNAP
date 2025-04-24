document.addEventListener("DOMContentLoaded", () => {
  let menuItems =
    document.getElementsByClassName("stageSelectMenu")[0].children;
  let selectedIndex = 0;
  let stageDescriptionDataBase = {
    sans: "サンズ<br>難易度★★★★★★★<br>Gルートのラスボス<br>UNDERTALE最強の敵なので、初見プレイは100%確実にやめたほうがいい",
    paphyrus:
      "パピルス<br>難易度★★☆☆☆☆☆<br>初見でも倒せる中ボス<br>(N・Pルートを想定)<br>友情イベントもある(本作では途中までしか出てこない)",
    toriel:
      "トリエル<br>難易度★☆☆☆☆☆☆<br>倒すと悲しい気持ちになるので、プレイしないことをおすすめします。<br>(N・Pルートを想定)",
    asgore:
      "アズゴア<br>難易度★★★★☆☆☆<br>(条件によっては)Nルートのラスボス<br>若干難しいが、5回ぐらいくりかえすと倒せる(Nルートを想定)",
    flowey:
      "フラウィ<br>難易度★★★★★☆☆<br>Nルートのラスボス<br>UNDERTALEでおそらく3番目の強敵。初見プレイはやめたほうがいいかも",
    undyne:
      "アンダイン<br>難易度★★★★☆☆☆<br>戦闘には反射神経が必要。友情イベントもある(本作では途中までしか出てこない)<br>N・Pルートを想定",
    undyngUndyne:
      "ふじみのアンダイン<br>難易度★★★★★★☆<br>Gルートの中ボス。とても鋭い反射神経が必要な、UNDERTALEでおそらく2番目の強敵。<br>初見プレイは非推奨",
    metatonEX:
      "メタトンEX<br>難易度★★★★☆☆☆<br>ショー形式のユニークなボス戦。<br>攻撃を避けつつ視聴率を上げる必要がある。<br>N・Pルートを想定",
    asriel:
      "アズリエル<br>難易度★★★☆☆☆☆<br>Pルートのラスボス<br>壮大な演出と感動的なストーリーが特徴。<br>戦闘自体は難しくないが、物語の核心に迫る重要な戦い。",
  };
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (selectedIndex !== 0) {
        menuItems[selectedIndex].classList.remove("selected");
        let cursorSoul = menuItems[selectedIndex].children[0];
        selectedIndex = selectedIndex - 1;
        menuItems[selectedIndex].classList.add("selected");
        menuItems[selectedIndex].prepend(cursorSoul);
        document.getElementsByClassName("stageDescriptionText")[0].innerHTML =
          stageDescriptionDataBase[menuItems[selectedIndex].id];
      }
    } else if (e.key === "ArrowDown") {
      if (selectedIndex !== menuItems.length - 1) {
        menuItems[selectedIndex].classList.remove("selected");
        let cursorSoul = menuItems[selectedIndex].children[0];
        selectedIndex = selectedIndex + 1;
        menuItems[selectedIndex].classList.add("selected");
        menuItems[selectedIndex].prepend(cursorSoul);
        document.getElementsByClassName("stageDescriptionText")[0].innerHTML =
          stageDescriptionDataBase[menuItems[selectedIndex].id];
      }
    } else if (e.key === "Enter") {
      //let gameStartEvent = new CustomEvent("gameStart", {
      //  detail: { stageName: menuItems[selectedIndex].id },
      //});
      //window.dispatchEvent(gameStartEvent);
    }
  });
});
