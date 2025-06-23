import { CalendarBase, type CalendarConfig } from '@neraant/datepicker'
import '@neraant/datepicker/style.css'

export const App = () => {
	const rangeConfig: CalendarConfig = {
		mode: 'range'
	}

	const holidaysConfig: CalendarConfig = {
		holidays: [new Date(), new Date(2025, 5, 12)],
		showHolidays: true
	}

	const tasksConfig: CalendarConfig = {
		taskOn: true
	}

	const controllersConfig: CalendarConfig = {
		showUserController: true
	}

	const customThemeConfig: CalendarConfig = {
		theme: {
			calendar: {
				maxWidth: '660px',
				padding: '16px',
				backgroundColor: '#f0f8ff',
				borderColor: '#cccccc',
				borderWidth: '1px',
				borderRadius: '12px',
				textColor: 'red',
				monthLabelBackground: '#e0e0ff',
				todayBackground: '#ffe0e0',
				otherMonthTextColor: 'red',
				weekendTextColor: 'green'
			},
			primary: {
				color: '#0066ff',
				hoverColor: '#0044cc82',
				textColor: 'red'
			},
			holidays: {
				background: 'red',
				selectedBackground: '#ffcccc',
				textColor: '#cc0000'
			},
			range: {
				startBackground: 'red',
				endBackground: 'green',
				innerBackground: 'black',
				startColor: '#003366',
				endColor: '#003366',
				innerColor: '#0055aa'
			},
			controller: {
				placeholderColor: 'red',
				paddingX: '20px',
				paddingY: '20px'
			},
			typography: {
				fontFamily: "'Segoe UI', sans-serif",
				fontSize: '14px',
				fontSizeLarge: '18px',
				fontSizeSmall: '12px',
				fontSizeExtraSmall: '10px',
				fontWeight: '400',
				fontWeightBold: '700',
				fontWeightRegular: '400'
			},
			cell: {
				borderRadius: '6px',
				size: '36px'
			},
			tasks: {
				wrapper: {
					maxHeight: '100px',
					marginTop: '12px',
					titleColor: 'red'
				},
				input: {
					color: 'red',
					placeholderColor: 'green',
					paddingRight: '80px'
				},
				delete: {
					color: 'blue',
					iconSize: '14px',
					buttonMarginRight: '60px'
				},
				hasTasks: {
					color: '#00cc66',
					selectedColor: '#007733'
				},
				list: {
					gap: '6px',
					marginTop: '10px'
				},
				row: {
					padding: '4px 8px',
					titleGap: '6px'
				},
				checkbox: {
					borderRadius: '30px'
				},
				submit: {
					rightOffset: '100px',
					paddingVertical: '6px',
					paddingHorizontal: '12px'
				}
			}
		}
	}

	return (
		<>
			<a
				href='https://683dec606a9f0b644a8b390b-zdadvtnfxa.chromatic.com/'
				target='_blank'
				className='link'
			>
				More here! Storybook.
			</a>
			<div className='container'>
				<div className='example'>
					<h2>Default Calendar</h2>
					<CalendarBase />
				</div>

				<div className='example'>
					<h2>Range Calendar</h2>
					<CalendarBase config={rangeConfig} />
				</div>

				<div className='example'>
					<h2>Holidays Calendar</h2>
					<CalendarBase config={holidaysConfig} />
				</div>

				<div className='example'>
					<h2>Controllers Calendar</h2>
					<CalendarBase config={controllersConfig} />
				</div>

				<div className='example'>
					<h2>Tasks Calendar</h2>
					<CalendarBase config={tasksConfig} />
				</div>

				<div className='example'>
					<h2>Custom Calendar</h2>
					<CalendarBase config={customThemeConfig} />
				</div>
			</div>
		</>
	)
}
