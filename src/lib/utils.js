const COLORS = {
	green: {
		bg: "bg-[#ECF7D4]",
		badge: "bg-[#D6F497]",
	},
	// orange: {
	// 	bg: "bg-[#F9EFE1]",
	// 	badge: "bg-[#F7E0B8]",
	// },
	// red: {
	// 	bg: "bg-[#FBE5E7]",
	// 	badge: "bg-[#FDC6C7]",
	// },
};

export const getRandomColor = () => {
	const colorNames = Object.keys(COLORS); // Get array of the keys (color names)
	const randomIndex = Math.floor(Math.random() * colorNames.length); // Get a random index
	const randomColorName = colorNames[randomIndex]; // Get the color name at the random index
	return COLORS[randomColorName]; // Return the color object corresponding to the random color name
};


export const machines = [
	{
		image : '/core-composer.jpg',
		name : 'Core Composer',
		efficiency : '75',
		consumption : '20'
	},
	{
		image : '/boiler.png',
		name : 'Thermic Fluid Heater',
		efficiency : '80',
		consumption : '100'
	},
	{
		image : '/cold press.jpg',
		name : 'Cold Press',
		efficiency : '75',
		consumption : '13'
	},
	{
		image : '/dryer.png',
		name : 'Dryer',
		efficiency : '70',
		consumption : '25'
	},
	{
		image : '/peeling.jpg', 
		name : 'Peeling Machine',
		efficiency : '80',
		consumption : '44'
	},
	{
		image : '/WBS.jpg',
		name : 'Wide Belt Sander',
		efficiency : '85',
		consumption : '17'
	},
	{
		image : '/hot press.jpg',
		name : 'Hot Press',
		efficiency : '85',
		consumption : '72'
	},
	{
		image : '/Calibrator.jpg',
		name : 'Calibrator',
		efficiency : '80',
		consumption : '10'
	},
	{
		image : '/seasoning.jpg',
		name : 'Seasoning Chamber',
		efficiency : '75',
		consumption : '15'
	},
	{
		image : '/DDSAW.jpg',
		name : 'DD Saw',
		efficiency : '85',
		consumption : '32.5'
	},
	
	
];

