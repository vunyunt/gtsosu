export default {
  name: "Expert Global Taiko Showdown",
  description:
    "Expert Global Taiko Showdownは、参加者のppランクに制限はありませんが、トッププレイヤーを対象としたトーナメントです。予選を突破した上位128人が、ダブルイリミネーション方式のトーナメントで戦います。",
  discord: "https://discord.gg/3mGC3HB",
  homepage: [
    {
      title: "参加資格",
      body: `このトーナメントは、ppランクや国籍に関する制限はありません。過去12か月以内にアカウントを制限モードにされていないプレイヤーは、誰でもこの大会に参加できます。なお、osu!公式スタッフは、スクリーニング検査によって何らかの問題が発覚したプレイヤーを大会から排除する権利を保持しています。`,
    },
    {
      title: "日程",
      body: `
### 参加登録期間
9月4日～9月19日
### スクリーニング期間
9月19日～9月26日
### 予選（Qualifiers）
10月2日～10月3日
### Round of 128
10月9日～10月10日
### Round of 64 + Loser's Bracket Round 1 and 2
10月16日～10月17日
### Round of 32 + Loser's Bracket Round 3 and 4
10月23日～10月24日
### Round of 16 + Loser's Bracket Round 5 and 6
10月30日～10月31日
### Quarterfinals + Loser's Bracket 7 and 8
11月6日～11月7日
### Semifinals + Loser's Bracket Round 9 and 10
11月13日～11月14日
### Winner's Bracket Finals + Loser's Bracket Finals
11月20日～11月21日
### Loser's Bracket Grand Finals + Grand Finals
11月27日～11月28日`,
    },
    {
      title: "参加方法",
      body:
        "このウェブサイトの一番上にある「ログイン」からあなたのosu!アカウントでログインした後、このページの上部にある「Register」ボタンを押してください。その後、「Discord」ボタンをクリックして大会のDiscordサーバーに入ってください。**大会に出場する場合、Discordサーバーへの参加は必須です。もし参加しなかった場合は大会への出場が取り消しとなります。**",
    },
    {
      title: "賞品",
      body: `
- **優勝:** osu!プロフィールバッジ
- **準優勝:** osu!プロフィールバッジ（暫定）
- **3位:** osu!プロフィールバッジ（暫定）`,
    },
  ],
  rules: `
# 概要
- この大会は**個人戦**です。
- 大会は**ダブルイリミネーション形式のトーナメント**で行われます.
- 本大会では**Score V2**を使用します。
- 参加資格の項で示した基準を満たす人はプレイヤーとして参加できます。この大会はプロフィールバッジを贈呈することが予定されているため、いくつかのプレイヤーはosu!公式スタッフによって参加が取り消される場合があります。
- **主催者、マッププール作成者、マッパー、審判**以外のスタッフは大会へプレイヤーとして参加できます。
- 参加者とスタッフは必ずこのルールすべてに目を通してください（全員がルールを把握している前提で大会を進行します）。
- すべての参加者・スタッフは、他人に失礼のないように接しなければなりません。もし不適切な言動が確認された場合、大会からの追放や一定期間の大会参加禁止処分などの対応を取ることがあります。
- ルールの変更やハプニングが起った際には、Discordのサーバー内にて連絡します。

# 各ステージでのルール
- このトーナメントには、予選、RO128、RO64、RO32、RO16、Quarterfinals、Semifinals、Finals、Grand Finalsの9つのステージがあります。
- それぞれのプレイヤーは、予選でプレイした各譜面での順位の平均値によってシードが与えられます。
- 各ステージの勝利条件は以下の通りです:
    - RO128, RO64, RO32, RO16: BO9 (5点先取)
    - Quarterfinals: BO11 (6点先取)
    - Semifinals, Finals, Grand Finals: BO13 (7点先取)
   
# 予選（Qualifiers）に関して
 - 予選は、様々な時間帯に開かれるマルチ部屋内で行われます。
 - 当該する時間になったプレイヤーは、予め作成されているマルチの部屋に招待されます。その時にはosu!上でオンラインになっておいてください。
 - 予選ではウォームアップは行いません。
 - シードは、予選での各譜面で記録したスコアをもとにした順位の平均値で決定されます。
 - 予選では、各譜面を2回ずつプレイします。2回のうち高いほうのスコアで順位が算出されます。
 - 上位128人のみがRO128以降のトーナメントへ進出できます。

# マッププールに関して
- 予選, RO128, RO64, RO32, RO16, Quarterfinals, Semifinals, Finals, Grand Finalsのそれぞれにつき1つのマッププールが用意されます。 
- Winner's bracketとLoser's Bracketで違うマッププールが用意されることはありません。
- 予選でのマッププールはそれ以降のマッププールとは異なり、3つのNoMod譜面、2つのHidden譜面、2つのHardRock譜面、2つのDoubleTime譜面、1つのHidden+HardRock譜面で構成されます。
- RO128以降でのそれぞれのマッププールは、**NoMod、Hidden、HardRock、DoubleTime、FreeMod、Tiebreaker**の6つのブラケットで構成されます。
- RO128からRO64のマッププールは、14個の譜面で構成されます。RO32からQuarterfinalsでは15譜面、SemifinalsからGrand Finalsでは19譜面です。
- RO128からRO64でのNoModの譜面数は4つです。これがRO32からQuarterfinalsでは5つに、SemifinalsからGrand Finalsでは6つになります。
- RO128からQuarterfinalsでのHidden、HardRock、DoubleTimeの譜面数は2つです。これがSemifinalsからGrand Finalsでは3つになります。
- FreeModの譜面数は大会を通して3つです。
- FreeModをプレイする際にはマルチ部屋の個別Modが有効にされます。プレイヤーはHidden、HardRock、もしくはその両方をつけてプレイしなければなりません。
- TiebreakerではFreeModと同じようにModをつけることができますが、必須ではありません。
- それぞれのマッププールは試合の1週間前に公開されます。

# スケジュールに関して
- 各ステージは**毎週末**に行われます。（週末にプレイすることができない場合、審判の都合が合うならば平日にリスケジュールすることも可能です）
- スタッフは、各プレイヤーのタイムゾーンに合わせ、できるだけ試合が深夜や早朝にならないように心がけます。スケジュールは試合の約1週間前に公開されます。
- リスケジュールは、該当する試合に出場するプレイヤー双方の合意がある場合に限り可能です。リスケジュールする場合は、プレイヤー間で合意を取った上で、試合日の直前の**金曜日 8:59 UTC+9**までにスタッフに連絡してください。

# 試合進行に関して（RO128以降）
- 試合時間の10分前に、審判がマルチ部屋を作成します。試合時間になると、各プレイヤーはマルチ部屋に招待されます。
- もし試合時間になってもスタッフや審判が誰もいない場合、その試合は延期されます。
- 片方のプレイヤーが試合時間に遅れて部屋へ入ってくる場合、遅刻は10分まで許容されます。
- 10分以内ならば、試合時間後マルチ部屋に即入室しなくてもペナルティが課されることはありません。
- 試合時間後10分経ってプレイヤーが2人ともマルチ部屋にいない場合、その試合は予選でのシードが高かったプレイヤーの勝利となります。
- 試合を行う際のマルチ部屋のチームモードはHead to Head、スコア方式はScoreV2に設定され、部屋の名前は"EGTS 2021: (Player Red) vs (Player Blue)"になっています。
- 各プレイヤーはウォームアップを行うことができますが、使用する譜面は3分以内でなければなりません。また、ウォームアップで使用する譜面は、試合時間の1時間以上前に審判に知らせておかなければなりません。
- 上記のルールを守らない場合、プレイヤーはウォームアップを行うことができません。
- 各プレイヤーはマッププールから**1つの譜面**をbanしなければなりません（Tiebreakerを除く）。banされた譜面はその試合終了までpickすることはできません。
- 各プレイヤーはチャットで"!roll"コマンドを打ちます。
- **!rollの結果が高かった方のプレイヤーは、banを後に行い、pickを先に行います。!rollの結果が低かった方のプレイヤーは、banを先に行い、pickを後に行います。**
- 各プレイヤーは2分以内にどの譜面をbanするか発言してください。2分以内に発言しない場合、審判が!rollを用いてランダムにbanする譜面を決定します。
- ban終了後は、各プレイヤーが交互に譜面をpickしていきます。
- 譜面はどのブラケットからpickしても構いません。
- プレイヤーは2分以内にpickする譜面を発言し、pick後両プレイヤーは2分以内に準備を完了させてください。2分以内にpickを完了させない場合、審判が!rollを用いてランダムにpickする譜面を決定します。pick後2分経ってもプレイヤーの準備が完了していない場合、審判は強制的に試合をスタートさせます。
- もしプレイヤーが譜面のプレイ中以外に回線落ち等のハプニングによってオフラインになってしまった場合は、復帰するまで最大10分間待つことができます。この延長は一度しか適用できません。
- もしプレイヤーが譜面のプレイ開始から30秒以上経った後にオフラインとなってしまった場合、そのプレイヤーはその譜面では負けてしまったとして扱います。
- もしプレイヤーが譜面のプレイ開始から30秒以内にオフラインとなってしまった場合、その譜面のプレイをもう一度やり直すことができます。これは1人のプレイヤーにつき一度しか適用されません。
- ノルマ落ちしたプレイヤーのスコアは0点にせず、そのまま扱います。
- もし、ある譜面で両者のスコアが同点になった場合、いったんその譜面での記録は無効になりもう一度同じ譜面をプレイします。両者のスコアが再度同点になった場合、そのプレイも無効になり、この際プレイされた譜面をpickしたプレイヤーは別の譜面をpickしなければなりません。
- 両者がマッチポイントに達した場合（例：BO9で4-4になる）、強制的にTiebreakerがpickされます。
  `,
};
