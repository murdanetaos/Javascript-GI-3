function exercise(activity) {
    if (activity === 'running') {
      return "Today's exercise: running";
    } else if (activity === 'swimming') {
      return "Today's exercise: swimming";
    } else {
      return "Unknown activity";
    }
  }
    console.log(exercise('running')); // prints "Today's exercise: running"
console.log(exercise('swimming')); // prints "Today's exercise: swimming"
