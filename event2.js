process.on('exit', function() {
    console.log('exit event 발생');
    });
    setTimeout(function() {
    console.log('2초 후에 시스템 종료 시도...');
    process.exit();
    }, 2000);

    //     process.on('tick', function(count) {
    //     console.log('count event 발생 : %s', count);
    //     });
    //     setTimeout(function() {
    //     console.log('2초 후에 tick 이벤트 전달 시도...');
    //     process.emit('tick', '2');
    //     }, 2000);
