import os, time

kill_command = 'killall zoom'
print(kill_command)

def kill():
    os.system(kill_command)
wait_time = 60*60 + 15*60


for i in range(int(wait_time)):
    print(i, wait_time)
    time.sleep(1)

kill()
print('Killed at: ', time.ctime())