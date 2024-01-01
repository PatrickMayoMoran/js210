function jerry () {
  console.log(kate)
};

jerry()

var kate = "Kait";

/* hoisted version:
 *
 * function jerry () {
 *  console.log(kate);
 * }
 * var kate;
 * jerry()
 *
 * kate = "Kait"
