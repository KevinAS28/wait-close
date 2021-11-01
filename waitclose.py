import os, time

def kill():
    os.system('killall zoom')
wait_time = 60*60 + 15*60

for i in range(int(wait_time)):
    print(i, wait_time)
    time.sleep(1)
    
kill()
print('Killed at: ', time.ctime())