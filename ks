[33mcommit adfb5cfcfdf8040717873c931a0c986a28c3d2ea[m[33m ([m[1;36mHEAD -> [m[1;32mtodo[m[33m)[m
Author: Irfan Shaikh <irfanshaikh4421@gmail.com>
Date:   Wed May 6 08:54:47 2020 +0530

    styling todo comp

[1mdiff --git a/src/todo/todo.css b/src/todo/todo.css[m
[1mindex 22a2281..0c4514f 100644[m
[1m--- a/src/todo/todo.css[m
[1m+++ b/src/todo/todo.css[m
[36m@@ -7,4 +7,11 @@[m
     height: 100%;[m
     min-height: 80vh;[m
     margin-top: 5vh;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m#todo-base {[m
[32m+[m[32m    flex: 0 1 50%;[m
[32m+[m[32m    padding: 2rem;[m
[32m+[m[32m    box-shadow: 0px 0px 5px 0 rgba(0,0,0,.1);[m
[32m+[m[32m    text-align: center;[m
 }[m
\ No newline at end of file[m
[1mdiff --git a/src/todo/todo.js b/src/todo/todo.js[m
[1mindex 28e5952..851f3a9 100644[m
[1m--- a/src/todo/todo.js[m
[1m+++ b/src/todo/todo.js[m
[36m@@ -6,7 +6,9 @@[m [mclass Todo extends React.Component {[m
     render(){[m
         return ([m
         <div id="todo">[m
[31m-            [m
[32m+[m[32m            <div id='todo-base' >[m
[32m+[m[32m                Your tasks[m
[32m+[m[32m            </div>[m
         </div>[m
         )[m
     }[m
