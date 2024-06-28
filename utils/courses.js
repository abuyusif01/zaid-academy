class Course {
  constructor() {
    this.special = [
      { name: "SilverA", duration: 30, perWeek: 2, totalMonthly: 8, price: 40 },
      { name: "SilverB", duration: 30, perWeek: 3, totalMonthly: 12, price: 60 },
      { name: "SilverC", duration: 30, perWeek: 4, totalMonthly: 16, price: 80 },
      { name: "GoldA", duration: 45, perWeek: 1, totalMonthly: 4, price: 30 },
      { name: "GoldB", duration: 45, perWeek: 2, totalMonthly: 8, price: 60 },
      { name: "GoldC", duration: 45, perWeek: 3, totalMonthly: 12, price: 90 }
    ];
    this.premium = [
      { name: "SilverD", duration: 30, perWeek: 5, totalMonthly: 20, price: 90 },
      { name: "GoldD", duration: 45, perWeek: 4, totalMonthly: 16, price: 110 },
      { name: "GoldE", duration: 45, perWeek: 5, totalMonthly: 20, price: 130 }
    ];
    this.family = [
      { name: "Basic", noStudent: "2-3", duration: 60, perWeek: 2, totalMonthly: 8, price: 80 },
      { name: "Regular", noStudent: "2-3", duration: 60, perWeek: 3, totalMonthly: 12, price: 110 },
      { name: "Intensive", noStudent: "2-3", duration: 60, perWeek: 5, totalMonthly: 20, price: 160 }
    ];
  }

  getAllCourses() {
    return {
      special: this.special,
      premium: this.premium,
      family: this.family
    };
  }

  getCourseByName(name) {
    return [...this.special, ...this.premium, ...this.family].find(course => course.name === name);
  }

  getCoursesByCategory(category) {
    if (category === 'special') {
      return this.special;
    } else if (category === 'premium') {
      return this.premium;
    } else if (category === 'family') {
      return this.family;
    } else {
      return [];
    }
  }
}

export default Course;
