// Code your solution in this file!
function logDriverNames(driver){
  const callback=function(dri,i,arr){
    console.log(dri.name)
  }
  driver.forEach(callback)
}

function logDriversByHometown(driver,location){
  const callback=function(dri,i,arr){
<<<<<<< HEAD
    if (dri.hometown===location){
=======
    if (driver.hometown===location){
>>>>>>> 3e64ced49017ca2b92627a3c01852ce2f23386ef
          console.log(dri.name)
    }
  }
  driver.forEach(callback)
}

<<<<<<< HEAD
function driversByRevenue(driver){

  const callback=function(dri1,dri2){return dri1.revenue-dri2.revenue}
  return driver.slice().sort(callback)
}

function driversByName(driver){

  const callback=function(dri1,dri2){return dri1.name.localeCompare(dri2.name)}
  return driver.slice().sort(callback)
}

function totalRevenue(driver){
  const callback=function(agg,ele,i,arr){
    return agg + parseInt(ele.revenue)
  }
  return driver.reduce(callback,[])
}
=======


>>>>>>> 3e64ced49017ca2b92627a3c01852ce2f23386ef



