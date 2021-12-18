//  TODO HW
// Зробити свій розпорядок дня. //
// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


// function iWokeUp(woke) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (woke) {
//                 console.log('Прокинувся');
//                 resolve(true)
//             } else {
//                 reject('Хватіт спати!');
//             }
//         }, 300)
//
//     })
// }
//
//
// function teeth() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Почистив зуби')
//             resolve(true);
//         }, 200)
//     })
// }
//
//
// function cat(feedTheCat) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (feedTheCat) {
//                 console.log('Нагодувати кота')
//                 resolve(true)
//             } else {
//                 reject('Кіт не з\'їв вчорашній корм')
//             }
//         }, 500)
//     })
// }
//
//
// function exercise(did) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (did) {
//                 console.log('Зарядка');
//                 resolve(true)
//             } else {
//                 reject('Вали робити зарядку')
//             }
//         }, 200)
//     })
// }
//
// function eat(notHungry) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (notHungry) {
//                 console.log('Поїв');
//                 resolve(true);
//             } else {
//                 reject('Лікарня чекає');
//             }
//         }, 500)
//     })
// }
//
//
// function coffee(drink) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (drink) {
//                 console.log('Кави випив');
//                 resolve(true)
//             } else {
//                 reject('Не спи')
//             }
//         }, 400)
//     })
// }
//
// function wentToWork(work) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (work) {
//                 console.log('Пішов на роботу');
//                 resolve(true)
//             } else {
//                 reject('Прийдеш на роботу а сьогодні не твій день')
//             }
//         }, 200)
//     })
// }
//
// function wentHome(home) {
//     return new Promise((resolve, reject) => {
//         if (home) {
//             console.log('Поїхав додому')
//             resolve(true);
//         } else {
//             reject('Машини нема йди пішки')
//         }
//     })
// }
//
//
// function work(isTaskDone, callback) {
//     return new Promise((resolve) => {
//         let money = 0
//         if (isTaskDone) {
//             console.log('Заробив ГРОШИИ')
//             money += 100;
//             callback(money)
//             resolve(false);
//         } else {
//             console.log('не заробив нічого?')
//             callback(money)
//             resolve();
//         }
//
//     })
// }
//
// function goShopping(cash) {
//     return new Promise((resolve, reject) => {
//         if (cash > 0) {
//             console.log('приніс кучу бабла ')
//             resolve(true)
//         } else {
//             reject('йди заробляй')
//         }
//     })
// }


// -----------------------------
// iWokeUp(true).then(result => {
//     return teeth(result);
// }).then(result => {
//     return cat(result)
// }).then(result => {
//     return coffee(result);
// }).then(result => {
//     return eat(result);
// }).then(result => {
//     return exercise(result);
// }).then(result => {
//     return wentToWork(result);
// }).then(result => {
//     return wentHome(result);
// }).then(result => {
//     return work(result, goShopping);
// }).then(result => {
//     return goShopping(result);
// })
// -----------------------------
// async function morning() {
//     try {
//         const woke = await iWokeUp(true);
//         const zubki = await teeth();
//         const feed = await cat(true);
//         const charged = await coffee(true);
//         const poiv = await eat(true);
//         const vprava = await exercise(true);
//         const working = await wentToWork(true);
//         const goTohom = await wentHome(true);
//         const job = await work(false, goShopping);
//
//     } catch (e) {
//         console.error(e);
//     }
// }
//
// morning();

// --------------------------------
function iWokeUp(e, cb) {
    setTimeout(() => {
        if (e) {
            cb(null, 'Прокинувся');
        } else {
            cb('Хватіт спати!');
        }
    }, 300)
}


function teeth(e, cb) {
    setTimeout(() => {
        if (e) {
            cb(null, 'Почистив зуби');
        } else {
            cb('не ваняй');
        }
    }, 200)
}


function cat(e, cb) {
    setTimeout(() => {
        if (e) {
            cb(null, 'Нагодувати кота');
        } else {
            cb('Кіт не з\'їв вчорашній корм');
        }
    }, 500)
}


function exercise(e, cb) {
    setTimeout(() => {
        if (e) {
            cb(null, 'Зарядка');
        } else {
            cb('Вали робити зарядку');
        }
    }, 200)
}

function eat(e, cb) {
    setTimeout(() => {
        if (e) {
            cb(null, 'Поїв');
        } else {
            cb('Лікарня чекає');
        }
    }, 500)
}


function coffee(e, cb) {
    setTimeout(() => {
        if (e) {
            cb(null, 'Кави випив');
        } else {
            cb('Не спи');
        }
    }, 400)
}

function wentToWork(e, cb) {
    setTimeout(() => {
        if (e) {
            cb(null, 'Пішов на роботу');
        } else {
            cb('Прийдеш на роботу а сьогодні не твій день');
        }
    }, 200)
}

function wentHome(e, cb) {
    if (e) {
        cb(null, 'Поїхав додому');
    } else {
        cb('Машини нема йди пішки');
    }
}


function work(e, cb) {
    if (e) {
        cb(null, 'Заробив ГРОШИИ');
    } else {
        cb('не заробив нічого?');
    }
}

function goShopping(e, cb) {
    if (e) {
        cb(null, 'приніс кучу бабла ');
    } else {
        cb('йди заробляй');
    }
}


iWokeUp(true, (error, callback) => {
    if (!error) {
        console.log(callback)

        teeth(true, (error, callback) => {
            if (!error) {
                console.log(callback);

                cat(true, (error, callback) => {
                    if (!error) {
                        console.log(callback);

                        exercise(true, (error, callback) => {
                            if (!error) {
                                console.log(callback);

                                eat(true, (error, callback) => {
                                    if (!error) {
                                        console.log(callback);

                                        coffee(true, (error, callback) => {
                                            if (!error) {
                                                console.log(callback);

                                                wentToWork(true, (error, callback) => {
                                                    if (!error) {
                                                        console.log(callback);

                                                        wentHome(true, (error, callback) => {
                                                            if (!error) {
                                                                console.log(callback);

                                                                work(true, (error, callback) => {
                                                                    if (!error) {
                                                                        console.log(callback);

                                                                        goShopping()
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    }
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});