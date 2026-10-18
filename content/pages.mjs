export const pages = {
  'team.html': {
    title: 'Our team',
    description: 'Meet Cyber Eagles, FTC team 27662: five students from Ashburn, Virginia, who started their own community robotics team.',
    kicker: 'The people behind team 27662',
    heading: 'We started our own team.',
    intro: 'A school robotics waitlist gave us a reason to build something of our own. That became the Cyber Eagles.',
    body: `
      <section class="section" id="our-start"><div class="wrap two-col">
        <div class="section-heading"><span class="number">01 / OUR BEGINNING</span><h2>A place to learn every part of robotics.</h2></div>
        <div class="prose"><p>When we were waitlisted for a school robotics team, we decided to start a community team in Ashburn, Virginia. Most of us were new to robotics.</p><p>We wanted to learn the whole job: choosing components, designing mechanisms, building, programming, and testing. Along the way, we also learned how to make decisions together and ask for help.</p></div>
      </div></section>
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">02 / THE TEAM</span><h2>Five students. Different starting points.</h2></div>
        <div class="two-col">
          <div class="rule-list"><div class="detail-row"><strong class="number">03</strong><div><h3>High school students</h3><p>Learning alongside younger teammates and sharing the work of building an FTC robot.</p></div></div><div class="detail-row"><strong class="number">02</strong><div><h3>Middle school students</h3><p>Bringing their own ideas to the same design, programming, and testing challenges.</p></div></div></div>
          <div class="prose"><p>We are a FIRST Tech Challenge team with a mix of experience levels. That means explaining our ideas, listening to each other, and learning new skills as the robot develops.</p><p>Our first-year Innovation Award was an encouraging start. The work since then has kept giving us new problems to solve.</p><a class="text-link" href="journey.html">Read our first-season notes →</a></div>
        </div>
      </div></section>
      <section class="section"><div class="wrap two-col">
        <div class="section-heading"><span class="number">03 / HOW WE WORK</span><h2>Everyone has something to figure out.</h2></div>
        <div class="prose"><p>A mechanism may need another revision. A program may need more testing. We share ideas, try alternatives, and use what happened to decide what to change.</p><p>The Cyber Claw, our arm extension, and our balancing experiments are some of the results of that approach.</p><a class="text-link" href="robot.html">See the first-season robot →</a></div>
      </div></section>`
  },
  'engineering.html': {
    title: 'Engineering',
    description: 'How Cyber Eagles designs, builds, programs, and tests its FTC robot, with lessons from the Cyber Claw and Viper slide.',
    kicker: 'Design / build / test',
    heading: 'The next version starts with a test.',
    intro: 'Our first-season robot gave us plenty to work through: reach, weight distribution, a wider chassis, and a claw we could make ourselves.',
    body: `
      <section class="section"><div class="wrap two-col">
        <div class="section-heading"><span class="number">01 / WORKING TOGETHER</span><h2>The mechanism and the code have to agree.</h2></div>
        <div class="prose"><p>Building a robot means making mechanical and programming decisions together. The arm needs to reach its target; the robot needs to stay balanced; the program needs to produce a repeatable movement.</p><p>Our first-season portfolio records a switch to mecanum wheels, a Viper slide for more reach, and a custom 3D-printed Cyber Claw. Each change gave us something else to test.</p></div>
      </div></section>
      <section class="section" id="process"><div class="wrap">
        <div class="section-heading"><span class="number">02 / THE DESIGN CYCLE</span><h2>Make a change. See what happens.</h2></div>
        <div class="process">
          <div class="tabs" role="tablist" aria-label="Engineering stages" aria-orientation="vertical">
            <button type="button" id="tab-0" role="tab" data-step="0" aria-selected="true" aria-controls="process-panel">01 / Understand</button>
            <button type="button" id="tab-1" role="tab" data-step="1" aria-selected="false" aria-controls="process-panel" tabindex="-1">02 / Design &amp; build</button>
            <button type="button" id="tab-2" role="tab" data-step="2" aria-selected="false" aria-controls="process-panel" tabindex="-1">03 / Program &amp; test</button>
            <button type="button" id="tab-3" role="tab" data-step="3" aria-selected="false" aria-controls="process-panel" tabindex="-1">04 / Improve</button>
          </div>
          <div class="panel" id="process-panel" role="tabpanel" aria-labelledby="tab-0" tabindex="0"><span class="number" id="stage">01 / UNDERSTAND</span><h3 id="step-title">Start with the problem.</h3><p id="step-copy">Identify what the robot needs to do, then break that challenge into smaller decisions about movement, reach, control, and available parts.</p><p class="note" id="step-takeaway">The question: What does the robot need to accomplish?</p></div>
        </div>
      </div></section>
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">03 / FROM THE PORTFOLIO</span><h2>Three places the cycle showed up.</h2></div>
        <div class="three-col">
          <article class="prose"><span class="number">A / THE CLAW</span><h3>Print our own mechanism.</h3><p>Our 3D-printed Cyber Claw was designed to pick up samples and specimens.</p><a class="text-link" href="robot.html">Robot details →</a></article>
          <article class="prose"><span class="number">B / THE ARM</span><h3>Balance reach against weight.</h3><p>Adding the Viper slide extended our reach and made weight distribution an important part of testing.</p><a class="text-link" href="learning.html">Lessons learned →</a></article>
          <article class="prose"><span class="number">C / AUTONOMOUS</span><h3>Make movement repeatable.</h3><p>Encoder feedback and telemetry helped us adjust our Blocks programs.</p><a class="text-link" href="programming.html">Programming notes →</a></article>
        </div>
      </div></section>`
  },
  'robot.html': {
    title: 'First-season robot',
    description: 'Cyber Eagles first-season robot: mecanum drivetrain, Viper slide, custom 3D-printed Cyber Claw, and lessons in balance.',
    kicker: 'First-season archive / the robot',
    heading: 'Mecanum wheels. An extending arm. Our own claw.',
    intro: 'Our first-season robot brought these mechanisms together. This page records that build, rather than the current season’s robot.',
    body: `
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">01 / MECHANISMS</span><h2>What we built.</h2></div>
        <div class="rule-list">
          <article class="detail-row"><span class="number">01</span><div><h3>Mecanum drivetrain</h3><p>We switched to mecanum wheels in November of our first season so the robot could move in different directions.</p></div></article>
          <article class="detail-row"><span class="number">02</span><div><h3>Arm with a Viper slide</h3><p>We added the Viper slide in December to extend the arm. Testing brought attention to how reach, weight, and balance affected the robot.</p></div></article>
          <article class="detail-row"><span class="number">03</span><div><h3>The Cyber Claw</h3><p>Our custom 3D-printed claw was designed to pick up samples and specimens. It was one of the mechanisms we developed ourselves.</p></div></article>
        </div>
      </div></section>
      <section class="section"><div class="wrap two-col">
        <div class="section-heading"><span class="number">02 / A PRACTICAL FIX</span><h2>We tried hitches as counterweights.</h2></div>
        <div class="prose"><p>The arm made balance a real design problem. Working within our budget, we explored inexpensive options and repurposed hitches to adjust the robot’s weight distribution.</p><p>Our portfolio also identified limiting the Viper arm’s extension and reducing the robot’s width as possible improvements.</p><a class="text-link" href="learning.html">Read the full assessment →</a></div>
      </div></section>
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">03 / HARDWARE</span><h2>The rest of the system.</h2></div>
        <div class="three-col">
          <article class="prose"><h3>Structure &amp; movement</h3><ul class="feature-list"><li>Chassis and mecanum wheels</li><li>Motors and arm</li><li>Viper slide and Cyber Claw</li></ul></article>
          <article class="prose"><h3>Power &amp; control</h3><ul class="feature-list"><li>Control Hub</li><li>Expansion Hub</li><li>Power supply</li></ul></article>
          <article class="prose"><h3>Driver equipment</h3><ul class="feature-list"><li>Driver Hub</li><li>Logitech controller</li><li>Driver-controlled TeleOp program</li></ul></article>
        </div>
        <p class="note">These details describe the robot in our first-season portfolio.</p>
        <a class="text-link" href="programming.html">How we programmed it →</a>
      </div></section>`
  },
  'programming.html': {
    title: 'First-season programming',
    description: 'Four autonomous OpModes, Blocks programming, encoder feedback, and telemetry from Cyber Eagles first-season portfolio.',
    kicker: 'First-season archive / programming',
    heading: 'Four routines to choose from.',
    intro: 'Our autonomous strategy used different OpModes for the starting position and the strengths of our alliance.',
    body: `
      <section class="section"><div class="wrap">
        <div class="portfolio-tabs" role="tablist" aria-label="Programming notes">
          <button type="button" role="tab" id="program-tab-routines" aria-selected="true" aria-controls="program-routines">The four routines</button>
          <button type="button" role="tab" id="program-tab-approach" aria-selected="false" aria-controls="program-approach" tabindex="-1">How they worked</button>
          <button type="button" role="tab" id="program-tab-next" aria-selected="false" aria-controls="program-next" tabindex="-1">Ideas for next time</button>
        </div>
        <div class="portfolio-panel" id="program-routines" role="tabpanel" aria-labelledby="program-tab-routines" tabindex="0">
          <div class="rule-list">
            <article class="detail-row"><span class="number">01 / RIGHT BASIC</span><div><h3>Move and park.</h3><p>Move right and park in the observation zone.</p></div></article>
            <article class="detail-row"><span class="number">02 / LEFT BASIC</span><div><h3>Park on the other side.</h3><p>Move left and park in the net zone.</p></div></article>
            <article class="detail-row"><span class="number">03 / RIGHT SPECIMEN</span><div><h3>Hang a specimen, then park.</h3><p>Move, hang a specimen, and park in the observation zone.</p></div></article>
            <article class="detail-row"><span class="number">04 / LEFT SAMPLE</span><div><h3>Push samples and reach the bar.</h3><p>Move, push samples to the net zone, park in the ascent zone, and touch the lower ascent bar.</p></div></article>
          </div>
        </div>
        <div class="portfolio-panel" id="program-approach" role="tabpanel" aria-labelledby="program-tab-approach" tabindex="0" hidden><div class="two-col"><div class="section-heading"><span class="number">THE TOOLS</span><h2>Blocks, encoders, and telemetry.</h2></div><div class="prose"><p>We practiced with Blockly before writing our first FTC OpModes. Our autonomous routines used Blocks programming and encoder feedback for movement.</p><p>We set positions for the neck and Cyber Claw, then used telemetry to help fine-tune behavior. Alongside autonomous, we wrote a basic TeleOp program for driver control.</p></div></div></div>
        <div class="portfolio-panel" id="program-next" role="tabpanel" aria-labelledby="program-tab-next" tabindex="0" hidden><div class="two-col"><div class="section-heading"><span class="number">OPEN QUESTIONS</span><h2>What we wanted to explore next.</h2></div><div class="prose"><p>Our portfolio identified three possible improvements: odometry, AprilTag reading, and a color sensor.</p><p>These were development ideas. The portfolio did not claim they were completed features.</p></div></div></div>
        <p class="note">These programs belong to our first-season archive. Their zone names and objectives refer to that season’s game.</p>
      </div></section>
      <section class="section"><div class="wrap two-col"><div class="section-heading"><span class="number">BEYOND THE PROGRAM</span><h2>Code meets the actual robot.</h2></div><div class="prose"><p>Our programming work happened alongside changes to the drivetrain, arm, and claw. Testing gave us a way to compare what we wanted the robot to do with what it actually did.</p><a class="text-link" href="robot.html">See the hardware →</a></div></div></section>`
  },
  'journey.html': {
    title: 'Our journey',
    description: 'From a school-team waitlist to a community FTC team: the first-season notes and milestones of Cyber Eagles.',
    kicker: 'From the team notebook',
    heading: 'How we got started.',
    intro: 'We began with a school-team waitlist, a new community team, and a lot to learn about FTC robotics.',
    body: `
      <section class="section"><div class="wrap two-col">
        <div class="section-heading"><span class="number">AN ENCOURAGING START</span><h2>A first-year Innovation Award.</h2></div>
        <div class="prose"><p>Our team earned an Innovation Award in its first year. It gave us encouragement to keep developing our ideas and learning new skills.</p><p>The practical work around that milestone is recorded in our first-season portfolio: waiting for parts, learning to program, attending scrimmages, and revising the robot.</p></div>
      </div></section>
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">FIRST-SEASON ARCHIVE</span><h2>One change at a time.</h2></div>
        <div class="timeline">
          <div class="event"><span class="time">SEPTEMBER</span><div><h3>Start the club. Learn the basics.</h3><p>While waiting for robot parts, we practiced Blockly programming and learned about robot components and FTC OpModes.</p></div></div>
          <div class="event"><span class="time">OCTOBER</span><div><h3>Get a first robot running.</h3><p>We assembled the initial robot, wrote our first OpMode and a basic TeleOp program, and planned an outreach event.</p></div></div>
          <div class="event"><span class="time">NOVEMBER</span><div><h3>Try it around other teams.</h3><p>We attended our first scrimmage, switched to mecanum wheels, held an outreach event, and wrote our first autonomous program. We also learned about encoders and ticks.</p></div></div>
          <div class="event"><span class="time">DECEMBER</span><div><h3>Add reach. Work on balance.</h3><p>We added the Viper slide, developed the 3D-printed Cyber Claw, and used repurposed hitches to adjust weight distribution.</p></div></div>
          <div class="event"><span class="time">LATER IN THE SEASON</span><div><h3>Keep testing.</h3><p>We improved autonomous operation and took part in a second scrimmage.</p></div></div>
        </div>
        <p class="note">This timeline follows the first-season portfolio. Calendar years are not supplied in that record.</p>
      </div></section>
      <section class="section"><div class="wrap two-col"><div class="section-heading"><span class="number">THE WORK CONTINUES</span><h2>A team built around learning.</h2></div><div class="prose"><p>Our team brings together three high school students and two middle school students. Designing, building, and programming give us different ways to contribute and plenty of reasons to learn from each other.</p><a class="text-link" href="team.html">Meet the team →</a></div></div></section>`
  },
  'outreach.html': {
    title: 'Community outreach',
    description: 'Cyber Eagles shared its robot and FTC experience with children and parents at the Rock Ridge High School FIRST Expo.',
    kicker: 'Outreach / Rock Ridge High School',
    heading: 'Bring the robot. Start a conversation.',
    intro: 'At the FIRST Expo at Rock Ridge High School, we showed children and parents what our team had been working on.',
    body: `
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">AT THE EXPO</span><h2>More useful when you can see it move.</h2></div>
        <div class="three-col">
          <article class="prose"><span class="number">01 / THE DISPLAY</span><h3>Introduce the team.</h3><p>We set up a booth with a tri-fold display explaining our team and robot.</p></article>
          <article class="prose"><span class="number">02 / THE DEMONSTRATION</span><h3>Show the mechanisms.</h3><p>We demonstrated the robot and explained how its mechanisms worked through interactive demonstrations.</p></article>
          <article class="prose"><span class="number">03 / THE QUESTIONS</span><h3>Keep the conversation going.</h3><p>Children asked questions about the robot. Parents wanted to know how to start an FTC club.</p></article>
        </div>
      </div></section>
      <section class="section"><div class="wrap two-col">
        <div class="section-heading"><span class="number">WHAT WE HEARD</span><h2>Could you teach us block programming?</h2></div>
        <div class="prose"><p>Some visitors asked us to teach block programming in a future session. Their interest gave us an idea for a YouTube channel where we could share what we were learning.</p><p>The expo also gave us practice explaining our work to people who had never seen an FTC robot before.</p><p class="note">The channel and future teaching sessions were ideas recorded in our portfolio. No channel or upcoming event is announced here.</p></div>
      </div></section>
      <section class="section"><div class="wrap two-col"><div class="section-heading"><span class="number">BEYOND THE BOOTH</span><h2>Learning how to run a team, too.</h2></div><div class="prose"><p>Alongside building and outreach, we researched equipment costs and worked on a budget. Those decisions helped us connect our engineering plans to the resources available.</p><a class="text-link" href="budget.html">How we approached the budget →</a></div></div></section>`
  },
  'learning.html': {
    title: 'Lessons learned',
    description: 'Cyber Eagles first-season assessment: Cyber Claw strengths, width and balance challenges, and practical next steps.',
    kicker: 'First-season archive / lessons learned',
    heading: 'Write down what needs work.',
    intro: 'Our first-season SWOT assessment named the good parts of the robot and the problems we still needed to solve.',
    body: `
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">THE ASSESSMENT</span><h2>What the portfolio recorded.</h2></div>
        <div class="rule-list">
          <article class="detail-row"><span class="number">01 / STRENGTHS</span><div><h3>A team ready to learn. A claw of our own.</h3><p>Enthusiastic teammates, a shared interest in robotics, and our custom 3D-printed Cyber Claw.</p></div></article>
          <article class="detail-row"><span class="number">02 / WEAKNESSES</span><div><h3>Width and weight distribution.</h3><p>A wider robot body and challenges with balance and weight distribution.</p></div></article>
          <article class="detail-row"><span class="number">03 / OPPORTUNITIES</span><div><h3>Make specific changes.</h3><p>Improve balance, limit Viper arm extension, reduce the robot’s width, and expand outreach and STEM education.</p></div></article>
          <article class="detail-row"><span class="number">04 / THREATS</span><div><h3>Protect the electronics.</h3><p>Electrostatic discharge (ESD), interference, and the risk of servos burning out.</p></div></article>
        </div>
      </div></section>
      <section class="section"><div class="wrap two-col"><div class="section-heading"><span class="number">THE NEXT ITERATION</span><h2>Turn an observation into a change.</h2></div><div class="prose"><p>The assessment gave us a starting point for the next round of brainstorming, building, programming, and testing. “Improve balance” is more useful when it leads to a specific change we can try.</p><p>These notes describe our first-season robot. They are an archive of what we learned, rather than an assessment of the current build.</p><a class="text-link" href="engineering.html#process">Our design cycle →</a></div></div></section>`
  },
  'gallery.html': {
    title: 'Reference gallery',
    description: 'Credited FTC reference photographs from Titan Robotics Club and Heritage Middle School. These are not Cyber Eagles team photographs.',
    kicker: 'FTC reference gallery',
    heading: 'A look around the FTC community.',
    intro: 'These credited reference photos show other teams’ robots. They do not show the Cyber Eagles or our robot.',
    body: `
      <section class="section"><div class="wrap">
        <div class="filters" role="group" aria-label="Filter reference photographs">
          <button type="button" class="active" data-filter="all" aria-pressed="true">All photos</button>
          <button type="button" data-filter="design" aria-pressed="false">Robot design</button>
          <button type="button" data-filter="field" aria-pressed="false">On the field</button>
        </div>
        <div class="gallery">
          <figure class="image-block" data-category="design"><button type="button" class="zoom" aria-label="Enlarge Titan Robotics reference photo" data-caption="Reference photo: Titan Robotics Club. This is not a Cyber Eagles robot."><img src="assets/engineering.jpg" alt="Titan Robotics FTC robot with a metal chassis and mecanum wheels" loading="lazy"></button><figcaption><span class="number">ROBOT DESIGN / REFERENCE</span><h3>Titan Robotics Club</h3><p>A look at mechanical construction, electronics, and a mecanum drivetrain.</p><a class="text-link credit" href="https://www.titanrobotics.com/ftc-robots" target="_blank" rel="noopener">Photo source: Titan Robotics Club ↗</a></figcaption></figure>
          <figure class="image-block" data-category="field"><button type="button" class="zoom" aria-label="Enlarge Heritage Middle School reference photo" data-caption="Reference photo: Heritage Middle School. These are not Cyber Eagles robots."><img src="assets/robots.jpg" alt="Two Heritage Middle School FTC robots on an indoor practice field" loading="lazy"></button><figcaption><span class="number">ON THE FIELD / REFERENCE</span><h3>Heritage Middle School</h3><p>Student-built robots in an FTC practice environment.</p><a class="text-link credit" href="https://hms.frenship.net/apps/pages/index.jsp?pREC_ID=2369735&amp;type=d&amp;uREC_ID=1607100" target="_blank" rel="noopener">Photo source: Heritage Middle School ↗</a></figcaption></figure>
        </div>
        <p class="note">Reference images are credited above. Cyber Eagles team and robot photographs can replace them when available.</p>
      </div></section>
      <dialog id="lightbox" aria-labelledby="caption"><button type="button" id="close-dialog">Close ×</button><img id="expanded" alt=""><p id="caption"></p></dialog>`
  },
  'acknowledgements.html': {
    title: 'Acknowledgements',
    description: 'The organizations, libraries, schools, and fellow FTC teams acknowledged in the Cyber Eagles first-season portfolio.',
    kicker: 'First-season archive / acknowledgements',
    heading: 'Thanks for helping us get started.',
    intro: 'Our first-season portfolio recognized these organizations, facilities, and fellow FTC teams.',
    body: `
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">COMMUNITY &amp; FACILITIES</span><h2>Places that made room for robotics.</h2></div>
        <div class="rule-list">
          <div class="detail-row"><h3>FIRST</h3><p>For Inspiration and Recognition of Science and Technology, the organization behind FTC.</p></div>
          <div class="detail-row"><h3>Brambleton Library</h3><p>For 3D printing and facilities.</p></div>
          <div class="detail-row"><h3>Ashburn Library</h3><p>For scrimmages.</p></div>
          <div class="detail-row"><h3>Rock Ridge High School</h3><p>For the outreach opportunity at the FIRST Expo.</p></div>
        </div>
      </div></section>
      <section class="section"><div class="wrap two-col">
        <div><div class="section-heading"><span class="number">FELLOW TEAMS</span><h2>Teams we learned alongside.</h2></div><ul class="feature-list"><li>Absolute ZERO</li><li>System Overload</li><li>BeaverBots</li><li>AlphaGo</li></ul></div>
        <div><div class="section-heading"><span class="number">QUALIFIER HOSTS</span><h2>Our first two qualifiers.</h2></div><div class="prose"><h3>Johns Hopkins APL</h3><p>Our first qualifier.</p><h3>Harrisonburg High School</h3><p>Our second qualifier.</p></div></div>
      </div></section>
      <section class="section"><div class="wrap"><p class="note">These acknowledgements describe support and experiences recorded in our first-season portfolio. They do not imply financial sponsorship.</p><a class="text-link" href="journey.html">Back to the team’s beginning →</a></div></section>`
  },
  'budget.html': {
    title: 'Team budget',
    description: 'How Cyber Eagles researched FTC equipment costs, started with family support, and considered future sponsorship.',
    kicker: 'Team resources / budget',
    heading: 'Figure out the cost before the build.',
    intro: 'Our budget planning began with the main robot components and motors we needed to get started.',
    body: `
      <section class="section"><div class="wrap">
        <div class="section-heading"><span class="number">HOW WE APPROACHED IT</span><h2>Research, support, and the next purchase.</h2></div>
        <div class="rule-list">
          <article class="detail-row"><span class="number">01 / RESEARCH</span><div><h3>Price the essentials.</h3><p>We researched the costs of the main building components and motors needed for FTC, then used those estimates to develop an initial budget.</p></div></article>
          <article class="detail-row"><span class="number">02 / FAMILY SUPPORT</span><div><h3>Get the team started.</h3><p>Our parents helped fund the team’s initial work so we could begin building and learning.</p></div></article>
          <article class="detail-row"><span class="number">03 / LOOKING AHEAD</span><div><h3>Explore sponsorship.</h3><p>Our planning included an intention to contact sponsors for additional support as the team grew.</p></div></article>
        </div>
      </div></section>
      <section class="section"><div class="wrap two-col"><div class="section-heading"><span class="number">WORKING WITH WHAT WE HAD</span><h2>Resourcefulness became part of the design.</h2></div><div class="prose"><p>Planning purchases helped us connect engineering ideas to practical costs. On the robot, inexpensive experiments such as repurposing hitches as counterweights gave us another way to investigate a problem.</p><p class="note">The source portfolio describes this approach to funding without publishing itemized costs or a confirmed sponsor list.</p><a class="text-link" href="robot.html">See the first-season build →</a></div></div></section>`
  }
};
