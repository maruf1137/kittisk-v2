const leftSidebarWrapper = document.querySelector('.left-sidebar-wrapper');
const rightSidebarTable = document.querySelector('.right-sidebar table');
const historyTable = document.querySelector('.history table');

// functin
function showData(markup, element) {
	element.innerHTML = '';
	element.insertAdjacentHTML('afterbegin', markup);
}

// left sidebar item
const mamberData = [
	{
		id: 1,
		profile: 'images/profile-1.png',
		as1: 'As 1 : RB_RCRC_SXZ',
		as2: 'As2 : 2554898233',
		rName: 'R Name: Robert papa',
		sName: 'S Name: Rober1234',
		admin: 'admin_1 : (15)',
		ch: 'Ch: ABC',
		time: 'time: 11:00',
		date: '17 01 2564',
	},
	{
		id: 2,
		profile: 'images/profile-2.png',
		as1: 'As 1 : RB_RCRC_KKK',
		as2: 'As2 : 6565656666',
		rName: 'R Name: Lucy OMG',
		sName: 'S Name: Lomg',
		admin: 'admin_2 : (10)',
		ch: 'Ch: ABC',
		time: 'time: 12:00',
		date: '17 02 2564',
	},
	{
		id: 3,
		profile: 'images/profile-3.png',
		as1: 'As 1 : RB_RCRC_HHC',
		as2: 'As2 : 4456592536',
		rName: 'R Name: momay kuy',
		sName: 'S Name: mommam',
		admin: 'admin_3 : (5)',
		ch: 'Ch: ABC',
		time: 'time: 13:00',
		date: '17 03 2564',
	},
	{
		id: 4,
		profile: 'images/profile-4.png',
		as1: 'As 1 : RB_RCRC_SRZ',
		as2: 'As2 : 420558656',
		rName: 'R Name: boob boob',
		sName: 'S Name: BIGBoop',
		admin: 'admin_4 : (6)',
		ch: 'Ch: ABC',
		time: 'time: 14:00',
		date: '17 04 2564',
	},
	{
		id: 5,
		profile: 'images/profile-5.png',
		as1: 'As 1 : RB_RCRC_YTT',
		as2: 'As2 : 556326566',
		rName: 'R Name: soting singto',
		sName: 'S Name: Robert',
		admin: 'admin_0 : (0)',
		ch: 'Ch: ABC',
		time: 'time: 15:00',
		date: '17 05 2564',
	},
	{
		id: 6,
		profile: 'images/profile-6.png',
		as1: 'As 1 : RB_RCRC_QXZ',
		as2: 'As2 : 225448923',
		rName: 'R Name: kutut tutu',
		sName: 'S Name: kututu555',
		admin: 'admin_0 : (0)',
		ch: 'Ch: ABC',
		time: 'time: 16:00',
		date: '17 06 2564',
	},
	{
		id: 7,
		profile: 'images/profile-7.png',
		as1: 'As 1 : RB_RCRC_SOC',
		as2: 'As2 : 55899756',
		rName: 'R Name: Blacka bkai',
		sName: 'S Name: BBblack',
		admin: 'admin_0 : (0)',
		ch: 'Ch: ABC',
		time: 'time: 17:00',
		date: '17 07 2564',
	},
	{
		id: 8,
		profile: 'images/profile-8.png',
		as1: 'As 1 : RB_RCRC_RED',
		as2: 'As2 : 2257894',
		rName: 'R Name: Ruma rara',
		sName: 'S Name: Romam',
		admin: 'admin_1 : (20)',
		ch: 'Ch: ABC',
		time: 'time: 18:00',
		date: '17 08 2564',
	},
];
const leftSidebarmarkup = `
		 <!-- left sidebar item --> 
			${mamberData
				.map((item) => {
					const { profile, as1, as2, rName, sName, admin, ch, time, date, id } = item;
					return `
					<a href="#">
					<div class="left-sidebar-item contact d-flex justify-content-start align-items-center">
					<div class="avatar">
						<img src=${profile} alt=${rName} />
					</div>
					<div class="d-flex justify-content-around align-items-center w-100">
						<div class="">
							<h6>${as1}</h6>
							<p>${as2}</p>
							<p>${rName}</p>
							<p>${sName}</p>
						</div>
						<div class="">
							<p>${admin}</p>
							<p>${ch}</p>
							<p>${time}</p>
							<p>${date}</p>
						</div>
					</div>
				</div>
				</a>
				`;
				})
				.join('')}
		`;

showData(leftSidebarmarkup, leftSidebarWrapper);

// right sidebar table

const userdata = [
	{
		id: 1,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
	{
		id: 2,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
	{
		id: 3,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
	{
		id: 4,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
	{
		id: 5,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
	{
		id: 6,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
	{
		id: 7,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
	{
		id: 8,
		userName: '233 2554898233 SXZ',
		rName: 'Robert papa',
		bank: 'Kasikorn Thai',
		number: '25444756566',
	},
];
const rightSidebarmarkup = `
							${userdata
								.filter((item) => item.id === 1)
								.map((item) => {
									const { id, userName, rName, bank, number } = item;
									return `<tr>
								<td class="py-1">Username</td>
								<td>${userName}</td>
							</tr>
							<tr>
								<td class="py-1">R name</td>
								<td>${rName}</td>
							</tr>
							<tr>
								<td class="py-1">Bank</td>
								<td>${bank}</td>
							</tr>
							<tr>
								<td class="py-1">Number</td>
								<td>${number}</td>
							</tr>`;
								})
								.join('')}
							
`;
showData(rightSidebarmarkup, rightSidebarTable);

// history
const historyData = [
	{
		id: 1,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 2,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 3,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 4,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 5,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 1,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 2,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 3,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 4,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
	{
		id: 5,
		item1: '',
		item2: '',
		item3: '',
		item4: '',
		item5: '',
		item6: '',
		item7: '',
	},
];
const historyTableMarkup = `
								${historyData
									.map((item) => {
										const { id, item1, item2, item3, item4, item5, item6, item7 } = item;
										return `
									<tr>
										<td>${item1}</td>
										<td>${item1}</td>
										<td>${item1}</td>
										<td>${item1}</td>
										<td>${item1}</td>
										<td>${item1}</td>
										<td>${item1}</td>
									</tr>
									`;
									})
									.join('')}
								
`;
showData(historyTableMarkup, historyTable);
