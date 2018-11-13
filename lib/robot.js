class Robot {
	//your solution here
	constructor(robot) {
		this.coordinates = [ 0, 0 ],
		this.bearing = 'north'
		this.directions = ['north', 'east', 'south', 'west']
	}

	setCoordinates(num1, num2) {
		this.coordinates = [num1, num2]
	}

	setBearing(direction) {
		if (this.directions.includes(direction)) {
			this.bearing = direction} else{
				throw new Error('Invalid Robot Bearing')
			}
	}

	place(object1) {
		this.setBearing(object1.direction)
		this.coordinates = [object1.x, object1.y]
	}

	turnRight() {
		let indexValue = this.directions.indexOf(this.bearing)
		if (indexValue === 3) {
			this.bearing = this.directions[0]
		} else {
			this.bearing = this.directions[indexValue+1]
		}
	}

	turnLeft() {
		let indexValue = this.directions.indexOf(this.bearing)
		if (indexValue === 0) {
			this.bearing = this.directions[3]
		} else {
			this.bearing = this.directions[indexValue-1]
		}
	}

	advance() {
		switch(this.bearing) {
			case 'north':
				this.coordinates[1] += 1;
				break;
			case 'east':
				this.coordinates[0] += 1;
				break;
			case 'south':
				this.coordinates[1] -= 1;
				break;
			case 'west':
				this.coordinates[0] -= 1;
				break;
		}
	}

	translateInstructions(direction)
	 { 
		direction.split("").forEach(letter => {
		switch(letter) {
			case 'L':
				this.turnLeft();
				break;
			case 'R':
				this.turnRight();
				break;
			case 'A':
				this.advance();
				break;
			}
		});

	}
}
 