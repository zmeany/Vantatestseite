const vantaTeamsData = [
    {
        teamBadge: "TEAM 1",
        teamName: "Vanta Zenith",
        gameName: "ROCKET LEAGUE",
        description: "Das offizielle Rocket League Main Team von Vanta E-Sports.",
        stats: [
            { label: "MMR", value: "1.365" },
            { label: "Gegründet", value: "01.09.2026" },
            { label: "Suche", value: "C1 - C2", isHighlight: true }
        ],
        roster: [
            { name: "Suxxah", roleBadge: "CAPTAIN", trackerUrl: "https://tracker.network" },
            { name: "BimBim", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "zmeany", roleBadge: "", trackerUrl: "https://tracker.network" }
        ]
    },
    {
        teamBadge: "TEAM 2",
        teamName: "Vanta Evolution",
        gameName: "ROCKET LEAGUE",
        description: "Das 2. Rocket League Main Team von Vanta E-Sports",
        stats: [
            { label: "MMR", value: "1.409" },
            { label: "Gegründet", value: "02.09.2026" },
            { label: "Suche", value: "C3 - GC1", isHighlight: true }
        ],
        roster: [
            { name: "venarll", roleBadge: "CAPTAIN", trackerUrl: "https://tracker.network" },
            { name: "z9tss.", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "qlz", roleBadge: "", trackerUrl: "https://tracker.network" }
        ]
    },
        {
        teamBadge: "TEAM 3",
        teamName: "Vanta Phantom",
        gameName: "ROCKET LEAGUE",
        description: "Das 3. Rocket League Main Team von Vanta E-Sports.",
        stats: [
            { label: "MMR", value: "1.034" },
            { label: "Gegründet", value: "05.09.2026" },
            { label: "Suche", value: "D2 - D3", isHighlight: true }
        ],
        roster: [
            { name: "Litskaa", roleBadge: "CAPTAIN", trackerUrl: "https://tracker.network" },
            { name: "Koenig2099", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "FRGPeterbot", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "aditheskill48", roleBadge: "", trackerUrl: "https://tracker.network" }
        ]
    },
    {
        teamBadge: "TEAM 4",
        teamName: "Vanta Prime",
        gameName: "ROCKET LEAGUE",
        description: "Das 4. Rocket League Main Team von Vanta E-Sports",
        stats: [
            { label: "MMR", value: "1.119" },
            { label: "Gegründet", value: "08.09.2026" },
            { label: "Suche", value: "C1", isHighlight: true }
        ],
        roster: [
            { name: "Jycxn", roleBadge: "CAPTAIN", trackerUrl: "https://tracker.network" },
            { name: "Vuldrex", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "snoopD92ッ", roleBadge: "", trackerUrl: "https://tracker.network" }
        ]
    },
        {
        teamBadge: "TEAM 5",
        teamName: "Vanta Prime",
        gameName: "ROCKET LEAGUE",
        description: "Das 5. Rocket League Main Team von Vanta E-Sports",
        stats: [
            { label: "MMR", value: "991" },
            { label: "Gegründet", value: "10.09.2026" },
            { label: "Suche", value: "D1 - D3", isHighlight: true }
        ],
        roster: [
            { name: "Fr33zyB1xck", roleBadge: "CAPTAIN", trackerUrl: "https://tracker.network" },
            { name: "Zénáy", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "offline5300", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "zKnuddlerin", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "Dagobert9.6", roleBadge: "", trackerUrl: "https://tracker.network" },
            { name: "VSR Perez 11", roleBadge: "", trackerUrl: "https://tracker.network" }
        ]
    }



];

function renderVantaTeams() {
    const container = document.getElementById('dynamic-roster-container');
    if (!container) return;

    container.innerHTML = "";

    vantaTeamsData.forEach(team => {

        const teamCard = document.createElement('div');
        teamCard.className = 'team-dashboard-card';


        const leftColumn = document.createElement('div');
        leftColumn.className = 'dashboard-left';

        let statsHTML = '';
        team.stats.forEach(stat => {
            const valueClass = stat.isHighlight ? 'stat-value highlight-blue' : 'stat-value';
            statsHTML += `
                <div class="stat-row">
                    <span class="stat-label">${stat.label}</span>
                    <span class="${valueClass}">${stat.value}</span>
                </div>
            `;
        });

        leftColumn.innerHTML = `
            <span class="team-badge-top">${team.teamBadge}</span>
            <h2 class="team-main-title">${team.teamName}</h2>
            <span class="game-subtitle">${team.gameName}</span>
            <div class="team-stats-box">${statsHTML}</div>
        `;


        const rightColumn = document.createElement('div');
        rightColumn.className = 'dashboard-right';


        rightColumn.innerHTML = `
            <span class="section-title-small">TEAM BESCHREIBUNG</span>
            <p class="team-desc-text">${team.description}</p>
            <span class="section-title-small" style="margin-top: 30px;">ROSTER</span>
        `;


        const rosterListBox = document.createElement('div');
        rosterListBox.className = 'roster-list-box';


        team.roster.forEach(player => {

            const playerRow = document.createElement('a');
            playerRow.className = 'roster-player-row';
            playerRow.href = player.trackerUrl;
            playerRow.target = '_blank';
            playerRow.rel = 'noopener noreferrer';

            const badgeHTML = player.roleBadge ? `<span class="player-role-badge">${player.roleBadge}</span>` : '';

            playerRow.innerHTML = `
                <div class="player-meta-left">
                    <span class="player-name-text">${player.name}</span>
                    ${badgeHTML}
                </div>
                <span class="row-arrow">↗</span>
            `;
            rosterListBox.appendChild(playerRow);
        });

        rightColumn.appendChild(rosterListBox);


        teamCard.appendChild(leftColumn);
        teamCard.appendChild(rightColumn);
        container.appendChild(teamCard);
    });
}

document.addEventListener('DOMContentLoaded', renderVantaTeams);