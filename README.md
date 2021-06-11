<!-- @format -->

# node-Destructuring_assignment

Destructuring assignment によるパフォーマンス比較

# 結果発表

#### 分割代入をしたほう

> [81166:0x110008000] 36 ms: Scavenge 2.3 (3.0) -> 1.9 (4.0) MB, 1.0 / 0.0 ms (average mu = 1.000, current mu = 1.000) allocation failure

<details>
<summary>中間コード</summary>
<pre>
<code>
kind = REGEXP
name = ^([A-Z][a-z]+)+$
compiler = unknown
address = 0x7ffeefbfdbe0

Instructions (size = 1263)
0x21bf4fc82040 0 e983020000 jmp 0x21bf4fc822c8 <+0x288>
0x21bf4fc82045 5 4883e904 REX.W subq rcx,0x4
0x21bf4fc82049 9 c701c0020000 movl [rcx],0x2c0
0x21bf4fc8204f f 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc82059 19 483bc8 REX.W cmpq rcx,rax
0x21bf4fc8205c 1c 0f8705000000 ja 0x21bf4fc82067 <+0x27>
0x21bf4fc82062 22 e840040000 call 0x21bf4fc824a7 <+0x467>
0x21bf4fc82067 27 488d47ff REX.W leaq rax,[rdi-0x1]
0x21bf4fc8206b 2b 483b45b8 REX.W cmpq rax,[rbp-0x48]
0x21bf4fc8206f 2f 0f859a030000 jnz 0x21bf4fc8240f <+0x3cf>
0x21bf4fc82075 35 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc82079 39 488b4590 REX.W movq rax,[rbp-0x70]
0x21bf4fc8207d 3d 4883e904 REX.W subq rcx,0x4
0x21bf4fc82081 41 8901 movl [rcx],rax
0x21bf4fc82083 43 48c7459000000000 REX.W movq [rbp-0x70],0x0
0x21bf4fc8208b 4b 4883e904 REX.W subq rcx,0x4
0x21bf4fc8208f 4f c70191020000 movl [rcx],0x291
0x21bf4fc82095 55 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc8209f 5f 483bc8 REX.W cmpq rcx,rax
0x21bf4fc820a2 62 0f8705000000 ja 0x21bf4fc820ad <+0x6d>
0x21bf4fc820a8 68 e8fa030000 call 0x21bf4fc824a7 <+0x467>
0x21bf4fc820ad 6d 83ff00 cmpl rdi,0x0
0x21bf4fc820b0 70 0f8d55010000 jge 0x21bf4fc8220b <+0x1cb>
0x21bf4fc820b6 76 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x21bf4fc820ba 7a 8d42bf leal rax,[rdx-0x41]
0x21bf4fc820bd 7d 83f819 cmpl rax,0x19
0x21bf4fc820c0 80 0f8745010000 ja 0x21bf4fc8220b <+0x1cb>
0x21bf4fc820c6 86 83ffff cmpl rdi,0xff
0x21bf4fc820c9 89 0f8d3c010000 jge 0x21bf4fc8220b <+0x1cb>
0x21bf4fc820cf 8f 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x21bf4fc820d4 94 8d429f leal rax,[rdx-0x61]
0x21bf4fc820d7 97 83f819 cmpl rax,0x19
0x21bf4fc820da 9a 0f872b010000 ja 0x21bf4fc8220b <+0x1cb>
0x21bf4fc820e0 a0 4883e904 REX.W subq rcx,0x4
0x21bf4fc820e4 a4 8939 movl [rcx],rdi
0x21bf4fc820e6 a6 488b45a0 REX.W movq rax,[rbp-0x60]
0x21bf4fc820ea aa 4883e904 REX.W subq rcx,0x4
0x21bf4fc820ee ae 8901 movl [rcx],rax
0x21bf4fc820f0 b0 48897da0 REX.W movq [rbp-0x60],rdi
0x21bf4fc820f4 b4 488b4598 REX.W movq rax,[rbp-0x68]
0x21bf4fc820f8 b8 4883e904 REX.W subq rcx,0x4
0x21bf4fc820fc bc 8901 movl [rcx],rax
0x21bf4fc820fe be 488b45b8 REX.W movq rax,[rbp-0x48]
0x21bf4fc82102 c2 48894598 REX.W movq [rbp-0x68],rax
0x21bf4fc82106 c6 4883c702 REX.W addq rdi,0x2
0x21bf4fc8210a ca 4883e904 REX.W subq rcx,0x4
0x21bf4fc8210e ce c701e8010000 movl [rcx],0x1e8
0x21bf4fc82114 d4 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc8211e de 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82121 e1 0f8705000000 ja 0x21bf4fc8212c <+0xec>
0x21bf4fc82127 e7 e87b030000 call 0x21bf4fc824a7 <+0x467>
0x21bf4fc8212c ec 4883e904 REX.W subq rcx,0x4
0x21bf4fc82130 f0 8939 movl [rcx],rdi
0x21bf4fc82132 f2 83ff00 cmpl rdi,0x0
0x21bf4fc82135 f5 0f8d16000000 jge 0x21bf4fc82151 <+0x111>
0x21bf4fc8213b fb 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x21bf4fc8213f ff 8d429f leal rax,[rdx-0x61]
0x21bf4fc82142 102 83f819 cmpl rax,0x19
0x21bf4fc82145 105 0f8706000000 ja 0x21bf4fc82151 <+0x111>
0x21bf4fc8214b 10b 4883c701 REX.W addq rdi,0x1
0x21bf4fc8214f 10f ebe1 jmp 0x21bf4fc82132 <+0xf2>
0x21bf4fc82151 111 4883e904 REX.W subq rcx,0x4
0x21bf4fc82155 115 8939 movl [rcx],rdi
0x21bf4fc82157 117 48897d98 REX.W movq [rbp-0x68],rdi
0x21bf4fc8215b 11b 488b4590 REX.W movq rax,[rbp-0x70]
0x21bf4fc8215f 11f 4883e904 REX.W subq rcx,0x4
0x21bf4fc82163 123 8901 movl [rcx],rax
0x21bf4fc82165 125 4883459001 REX.W addq [rbp-0x70],0x1
0x21bf4fc8216a 12a 4883e904 REX.W subq rcx,0x4
0x21bf4fc8216e 12e c70190010000 movl [rcx],0x190
0x21bf4fc82174 134 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc8217e 13e 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82181 141 0f8705000000 ja 0x21bf4fc8218c <+0x14c>
0x21bf4fc82187 147 e81b030000 call 0x21bf4fc824a7 <+0x467>
0x21bf4fc8218c 14c e91cffffff jmp 0x21bf4fc820ad <+0x6d>
0x21bf4fc82191 151 486301 REX.W movsxlq rax,[rcx]
0x21bf4fc82194 154 4883c104 REX.W addq rcx,0x4
0x21bf4fc82198 158 48894590 REX.W movq [rbp-0x70],rax
0x21bf4fc8219c 15c 488b45b8 REX.W movq rax,[rbp-0x48]
0x21bf4fc821a0 160 48894598 REX.W movq [rbp-0x68],rax
0x21bf4fc821a4 164 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc821a7 167 4883c104 REX.W addq rcx,0x4
0x21bf4fc821ab 16b e900000000 jmp 0x21bf4fc821b0 <+0x170>
0x21bf4fc821b0 170 3b39 cmpl rdi,[rcx]
0x21bf4fc821b2 172 0f8528000000 jnz 0x21bf4fc821e0 <+0x1a0>
0x21bf4fc821b8 178 4883c104 REX.W addq rcx,0x4
0x21bf4fc821bc 17c 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc821c6 186 483be0 REX.W cmpq rsp,rax
0x21bf4fc821c9 189 0f8705000000 ja 0x21bf4fc821d4 <+0x194>
0x21bf4fc821cf 18f e85f020000 call 0x21bf4fc82433 <+0x3f3>
0x21bf4fc821d4 194 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc821d7 197 4883c104 REX.W addq rcx,0x4
0x21bf4fc821db 19b 4903d8 REX.W addq rbx,r8
0x21bf4fc821de 19e ffe3 jmp rbx
0x21bf4fc821e0 1a0 4883c7ff REX.W addq rdi,0xff
0x21bf4fc821e4 1a4 e968ffffff jmp 0x21bf4fc82151 <+0x111>
0x21bf4fc821e9 1a9 486301 REX.W movsxlq rax,[rcx]
0x21bf4fc821ec 1ac 4883c104 REX.W addq rcx,0x4
0x21bf4fc821f0 1b0 48894598 REX.W movq [rbp-0x68],rax
0x21bf4fc821f4 1b4 486301 REX.W movsxlq rax,[rcx]
0x21bf4fc821f7 1b7 4883c104 REX.W addq rcx,0x4
0x21bf4fc821fb 1bb 488945a0 REX.W movq [rbp-0x60],rax
0x21bf4fc821ff 1bf 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc82202 1c2 4883c104 REX.W addq rcx,0x4
0x21bf4fc82206 1c6 e900000000 jmp 0x21bf4fc8220b <+0x1cb>
0x21bf4fc8220b 1cb 48837d9001 REX.W cmpq [rbp-0x70],0x1
0x21bf4fc82210 1d0 0f8cf9010000 jl 0x21bf4fc8240f <+0x3cf>
0x21bf4fc82216 1d6 83ff00 cmpl rdi,0x0
0x21bf4fc82219 1d9 0f8d24000000 jge 0x21bf4fc82243 <+0x203>
0x21bf4fc8221f 1df 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc82229 1e9 483be0 REX.W cmpq rsp,rax
0x21bf4fc8222c 1ec 0f8705000000 ja 0x21bf4fc82237 <+0x1f7>
0x21bf4fc82232 1f2 e8fc010000 call 0x21bf4fc82433 <+0x3f3>
0x21bf4fc82237 1f7 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc8223a 1fa 4883c104 REX.W addq rcx,0x4
0x21bf4fc8223e 1fe 4903d8 REX.W addq rbx,r8
0x21bf4fc82241 201 ffe3 jmp rbx
0x21bf4fc82243 203 48897da8 REX.W movq [rbp-0x58],rdi
0x21bf4fc82247 207 4883e904 REX.W subq rcx,0x4
0x21bf4fc8224b 20b c7016d020000 movl [rcx],0x26d
0x21bf4fc82251 211 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc8225b 21b 483bc8 REX.W cmpq rcx,rax
0x21bf4fc8225e 21e 0f8705000000 ja 0x21bf4fc82269 <+0x229>
0x21bf4fc82264 224 e83e020000 call 0x21bf4fc824a7 <+0x467>
0x21bf4fc82269 229 e957010000 jmp 0x21bf4fc823c5 <+0x385>
0x21bf4fc8226e 22e 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc82278 238 483be0 REX.W cmpq rsp,rax
0x21bf4fc8227b 23b 0f8705000000 ja 0x21bf4fc82286 <+0x246>
0x21bf4fc82281 241 e8ad010000 call 0x21bf4fc82433 <+0x3f3>
0x21bf4fc82286 246 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc82289 249 4883c104 REX.W addq rcx,0x4
0x21bf4fc8228d 24d 4903d8 REX.W addq rbx,r8
0x21bf4fc82290 250 ffe3 jmp rbx
0x21bf4fc82292 252 486301 REX.W movsxlq rax,[rcx]
0x21bf4fc82295 255 4883c104 REX.W addq rcx,0x4
0x21bf4fc82299 259 48894590 REX.W movq [rbp-0x70],rax
0x21bf4fc8229d 25d 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc822a7 267 483be0 REX.W cmpq rsp,rax
0x21bf4fc822aa 26a 0f8705000000 ja 0x21bf4fc822b5 <+0x275>
0x21bf4fc822b0 270 e87e010000 call 0x21bf4fc82433 <+0x3f3>
0x21bf4fc822b5 275 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc822b8 278 4883c104 REX.W addq rcx,0x4
0x21bf4fc822bc 27c 4903d8 REX.W addq rbx,r8
0x21bf4fc822bf 27f ffe3 jmp rbx
0x21bf4fc822c1 281 33c0 xorl rax,rax
0x21bf4fc822c3 283 e93e010000 jmp 0x21bf4fc82406 <+0x3c6>
0x21bf4fc822c8 288 55 push rbp
0x21bf4fc822c9 289 4889e5 REX.W movq rbp,rsp
0x21bf4fc822cc 28c 57 push rdi
0x21bf4fc822cd 28d 56 push rsi
0x21bf4fc822ce 28e 52 push rdx
0x21bf4fc822cf 28f 51 push rcx
0x21bf4fc822d0 290 4150 push r8
0x21bf4fc822d2 292 4151 push r9
0x21bf4fc822d4 294 53 push rbx
0x21bf4fc822d5 295 6a00 push 0x0
0x21bf4fc822d7 297 6a00 push 0x0
0x21bf4fc822d9 299 4889e1 REX.W movq rcx,rsp
0x21bf4fc822dc 29c 49bac81e011001000000 REX.W movq r10,0x110011ec8
0x21bf4fc822e6 2a6 492b0a REX.W subq rcx,[r10]
0x21bf4fc822e9 2a9 0f8616000000 jna 0x21bf4fc82305 <+0x2c5>
0x21bf4fc822ef 2af 4883f928 REX.W cmpq rcx,0x28
0x21bf4fc822f3 2b3 0f8378000000 jnc 0x21bf4fc82371 <+0x331>
0x21bf4fc822f9 2b9 48c7c0ffffffff REX.W movq rax,0xffffffff
0x21bf4fc82300 2c0 e901010000 jmp 0x21bf4fc82406 <+0x3c6>
0x21bf4fc82305 2c5 49b80120c84fbf210000 REX.W movq r8,0x21bf4fc82001 ;; object: 0x21bf4fc82001 <Code REGEXP>
0x21bf4fc8230f 2cf 4989e2 REX.W movq r10,rsp
0x21bf4fc82312 2d2 4883ec08 REX.W subq rsp,0x8
0x21bf4fc82316 2d6 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc8231a 2da 4c891424 REX.W movq [rsp],r10
0x21bf4fc8231e 2de 488bd5 REX.W movq rdx,rbp
0x21bf4fc82321 2e1 498bf0 REX.W movq rsi,r8
0x21bf4fc82324 2e4 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x21bf4fc82329 2e9 48b81068830001000000 REX.W movq rax,0x100836810
0x21bf4fc82333 2f3 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc8233a 2fa 49ba7811011001000000 REX.W movq r10,0x110011178
0x21bf4fc82344 304 4d8912 REX.W movq [r10],r10
0x21bf4fc82347 307 49ba7011011001000000 REX.W movq r10,0x110011170
0x21bf4fc82351 311 49892a REX.W movq [r10],rbp
0x21bf4fc82354 314 ffd0 call rax
0x21bf4fc82356 316 4c8b15ecffffff REX.W movq r10,[rip+0xffffffec]
0x21bf4fc8235d 31d 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc82364 324 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc82368 328 4885c0 REX.W testq rax,rax
0x21bf4fc8236b 32b 0f8595000000 jnz 0x21bf4fc82406 <+0x3c6>
0x21bf4fc82371 331 4883ec28 REX.W subq rsp,0x28
0x21bf4fc82375 335 488b75e0 REX.W movq rsi,[rbp-0x20]
0x21bf4fc82379 339 488b7de8 REX.W movq rdi,[rbp-0x18]
0x21bf4fc8237d 33d 482bfe REX.W subq rdi,rsi
0x21bf4fc82380 340 488b5df0 REX.W movq rbx,[rbp-0x10]
0x21bf4fc82384 344 48f7db REX.W negq rbx
0x21bf4fc82387 347 488d441fff REX.W leaq rax,[rdi+rbx*1-0x1]
0x21bf4fc8238c 34c 488945b8 REX.W movq [rbp-0x48],rax
0x21bf4fc82390 350 49b80120c84fbf210000 REX.W movq r8,0x21bf4fc82001 ;; object: 0x21bf4fc82001 <Code REGEXP>
0x21bf4fc8239a 35a 837df000 cmpl [rbp-0x10],0x0
0x21bf4fc8239e 35e 7507 jnz 0x21bf4fc823a7 <+0x367>
0x21bf4fc823a0 360 ba0a000000 movl rdx,0xa
0x21bf4fc823a5 365 eb05 jmp 0x21bf4fc823ac <+0x36c>
0x21bf4fc823a7 367 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x21bf4fc823ac 36c 488945b0 REX.W movq [rbp-0x50],rax
0x21bf4fc823b0 370 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc823b4 374 488945a0 REX.W movq [rbp-0x60],rax
0x21bf4fc823b8 378 48894598 REX.W movq [rbp-0x68],rax
0x21bf4fc823bc 37c 488b4d10 REX.W movq rcx,[rbp+0x10]
0x21bf4fc823c0 380 e980fcffff jmp 0x21bf4fc82045 <+0x5>
0x21bf4fc823c5 385 488b55f0 REX.W movq rdx,[rbp-0x10]
0x21bf4fc823c9 389 488b5dd8 REX.W movq rbx,[rbp-0x28]
0x21bf4fc823cd 38d 488b4de0 REX.W movq rcx,[rbp-0x20]
0x21bf4fc823d1 391 482b4de8 REX.W subq rcx,[rbp-0x18]
0x21bf4fc823d5 395 4803ca REX.W addq rcx,rdx
0x21bf4fc823d8 398 488b45b0 REX.W movq rax,[rbp-0x50]
0x21bf4fc823dc 39c 4803c1 REX.W addq rax,rcx
0x21bf4fc823df 39f 8903 movl [rbx],rax
0x21bf4fc823e1 3a1 488b45a8 REX.W movq rax,[rbp-0x58]
0x21bf4fc823e5 3a5 4803c1 REX.W addq rax,rcx
0x21bf4fc823e8 3a8 894304 movl [rbx+0x4],rax
0x21bf4fc823eb 3ab 488b45a0 REX.W movq rax,[rbp-0x60]
0x21bf4fc823ef 3af 4803c1 REX.W addq rax,rcx
0x21bf4fc823f2 3b2 894308 movl [rbx+0x8],rax
0x21bf4fc823f5 3b5 488b4598 REX.W movq rax,[rbp-0x68]
0x21bf4fc823f9 3b9 4803c1 REX.W addq rax,rcx
0x21bf4fc823fc 3bc 89430c movl [rbx+0xc],rax
0x21bf4fc823ff 3bf 48c7c001000000 REX.W movq rax,0x1
0x21bf4fc82406 3c6 488b5dc8 REX.W movq rbx,[rbp-0x38]
0x21bf4fc8240a 3ca 488be5 REX.W movq rsp,rbp
0x21bf4fc8240d 3cd 5d pop rbp
0x21bf4fc8240e 3ce c3 retl
0x21bf4fc8240f 3cf 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc82419 3d9 483be0 REX.W cmpq rsp,rax
0x21bf4fc8241c 3dc 0f8705000000 ja 0x21bf4fc82427 <+0x3e7>
0x21bf4fc82422 3e2 e80c000000 call 0x21bf4fc82433 <+0x3f3>
0x21bf4fc82427 3e7 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc8242a 3ea 4883c104 REX.W addq rcx,0x4
0x21bf4fc8242e 3ee 4903d8 REX.W addq rbx,r8
0x21bf4fc82431 3f1 ffe3 jmp rbx
0x21bf4fc82433 3f3 4c290424 REX.W subq [rsp],r8
0x21bf4fc82437 3f7 51 push rcx
0x21bf4fc82438 3f8 57 push rdi
0x21bf4fc82439 3f9 4989e2 REX.W movq r10,rsp
0x21bf4fc8243c 3fc 4883ec08 REX.W subq rsp,0x8
0x21bf4fc82440 400 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc82444 404 4c891424 REX.W movq [rsp],r10
0x21bf4fc82448 408 488bd5 REX.W movq rdx,rbp
0x21bf4fc8244b 40b 498bf0 REX.W movq rsi,r8
0x21bf4fc8244e 40e 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x21bf4fc82453 413 488b05d1feffff REX.W movq rax,[rip+0xfffffed1]
0x21bf4fc8245a 41a 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc82461 421 4c8b15d4feffff REX.W movq r10,[rip+0xfffffed4]
0x21bf4fc82468 428 4d8912 REX.W movq [r10],r10
0x21bf4fc8246b 42b 4c8b15d7feffff REX.W movq r10,[rip+0xfffffed7]
0x21bf4fc82472 432 49892a REX.W movq [r10],rbp
0x21bf4fc82475 435 ffd0 call rax
0x21bf4fc82477 437 4c8b15cbfeffff REX.W movq r10,[rip+0xfffffecb]
0x21bf4fc8247e 43e 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc82485 445 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc82489 449 4885c0 REX.W testq rax,rax
0x21bf4fc8248c 44c 0f8574ffffff jnz 0x21bf4fc82406 <+0x3c6>
0x21bf4fc82492 452 49b80120c84fbf210000 REX.W movq r8,0x21bf4fc82001 ;; object: 0x21bf4fc82001 <Code REGEXP>
0x21bf4fc8249c 45c 5f pop rdi
0x21bf4fc8249d 45d 59 pop rcx
0x21bf4fc8249e 45e 488b75e0 REX.W movq rsi,[rbp-0x20]
0x21bf4fc824a2 462 4c010424 REX.W addq [rsp],r8
0x21bf4fc824a6 466 c3 retl
0x21bf4fc824a7 467 4c290424 REX.W subq [rsp],r8
0x21bf4fc824ab 46b 56 push rsi
0x21bf4fc824ac 46c 57 push rdi
0x21bf4fc824ad 46d 4989e2 REX.W movq r10,rsp
0x21bf4fc824b0 470 4883ec08 REX.W subq rsp,0x8
0x21bf4fc824b4 474 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc824b8 478 4c891424 REX.W movq [rsp],r10
0x21bf4fc824bc 47c 488bf9 REX.W movq rdi,rcx
0x21bf4fc824bf 47f 488d7510 REX.W leaq rsi,[rbp+0x10]
0x21bf4fc824c3 483 48ba0080001001000000 REX.W movq rdx,0x110008000
0x21bf4fc824cd 48d 48b8e0435c0001000000 REX.W movq rax,0x1005c43e0
0x21bf4fc824d7 497 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc824de 49e 4c8b1557feffff REX.W movq r10,[rip+0xfffffe57]
0x21bf4fc824e5 4a5 4d8912 REX.W movq [r10],r10
0x21bf4fc824e8 4a8 4c8b155afeffff REX.W movq r10,[rip+0xfffffe5a]
0x21bf4fc824ef 4af 49892a REX.W movq [r10],rbp
0x21bf4fc824f2 4b2 ffd0 call rax
0x21bf4fc824f4 4b4 4c8b154efeffff REX.W movq r10,[rip+0xfffffe4e]
0x21bf4fc824fb 4bb 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc82502 4c2 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc82506 4c6 4885c0 REX.W testq rax,rax
0x21bf4fc82509 4c9 0f8414000000 jz 0x21bf4fc82523 <+0x4e3>
0x21bf4fc8250f 4cf 488bc8 REX.W movq rcx,rax
0x21bf4fc82512 4d2 49b80120c84fbf210000 REX.W movq r8,0x21bf4fc82001 ;; object: 0x21bf4fc82001 <Code REGEXP>
0x21bf4fc8251c 4dc 5f pop rdi
0x21bf4fc8251d 4dd 5e pop rsi
0x21bf4fc8251e 4de 4c010424 REX.W addq [rsp],r8
0x21bf4fc82522 4e2 c3 retl
0x21bf4fc82523 4e3 48c7c0ffffffff REX.W movq rax,0xffffffff
0x21bf4fc8252a 4ea e9d7feffff jmp 0x21bf4fc82406 <+0x3c6>

RelocInfo (size = 12)
0x21bf4fc82307 full embedded object (0x21bf4fc82001 <Code REGEXP>)
0x21bf4fc82392 full embedded object (0x21bf4fc82001 <Code REGEXP>)
0x21bf4fc82494 full embedded object (0x21bf4fc82001 <Code REGEXP>)
0x21bf4fc82514 full embedded object (0x21bf4fc82001 <Code REGEXP>)

kind = REGEXP
name = ^$
compiler = unknown
address = 0x7ffeefbfdf00

Instructions (size = 775)
0x21bf4fc82580 0 e9b7000000 jmp 0x21bf4fc8263c <+0xbc>
0x21bf4fc82585 5 4883e904 REX.W subq rcx,0x4
0x21bf4fc82589 9 c701f4000000 movl [rcx],0xf4
0x21bf4fc8258f f 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc82599 19 483bc8 REX.W cmpq rcx,rax
0x21bf4fc8259c 1c 0f8705000000 ja 0x21bf4fc825a7 <+0x27>
0x21bf4fc825a2 22 e858020000 call 0x21bf4fc827ff <+0x27f>
0x21bf4fc825a7 27 488d47ff REX.W leaq rax,[rdi-0x1]
0x21bf4fc825ab 2b 483b45b8 REX.W cmpq rax,[rbp-0x48]
0x21bf4fc825af 2f 0f85b2010000 jnz 0x21bf4fc82767 <+0x1e7>
0x21bf4fc825b5 35 83ff00 cmpl rdi,0x0
0x21bf4fc825b8 38 0f8d24000000 jge 0x21bf4fc825e2 <+0x62>
0x21bf4fc825be 3e 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc825c8 48 483be0 REX.W cmpq rsp,rax
0x21bf4fc825cb 4b 0f8705000000 ja 0x21bf4fc825d6 <+0x56>
0x21bf4fc825d1 51 e8b5010000 call 0x21bf4fc8278b <+0x20b>
0x21bf4fc825d6 56 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc825d9 59 4883c104 REX.W addq rcx,0x4
0x21bf4fc825dd 5d 4903d8 REX.W addq rbx,r8
0x21bf4fc825e0 60 ffe3 jmp rbx
0x21bf4fc825e2 62 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc825e6 66 48897da8 REX.W movq [rbp-0x58],rdi
0x21bf4fc825ea 6a 4883e904 REX.W subq rcx,0x4
0x21bf4fc825ee 6e c701d0000000 movl [rcx],0xd0
0x21bf4fc825f4 74 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc825fe 7e 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82601 81 0f8705000000 ja 0x21bf4fc8260c <+0x8c>
0x21bf4fc82607 87 e8f3010000 call 0x21bf4fc827ff <+0x27f>
0x21bf4fc8260c 8c e920010000 jmp 0x21bf4fc82731 <+0x1b1>
0x21bf4fc82611 91 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc8261b 9b 483be0 REX.W cmpq rsp,rax
0x21bf4fc8261e 9e 0f8705000000 ja 0x21bf4fc82629 <+0xa9>
0x21bf4fc82624 a4 e862010000 call 0x21bf4fc8278b <+0x20b>
0x21bf4fc82629 a9 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc8262c ac 4883c104 REX.W addq rcx,0x4
0x21bf4fc82630 b0 4903d8 REX.W addq rbx,r8
0x21bf4fc82633 b3 ffe3 jmp rbx
0x21bf4fc82635 b5 33c0 xorl rax,rax
0x21bf4fc82637 b7 e922010000 jmp 0x21bf4fc8275e <+0x1de>
0x21bf4fc8263c bc 55 push rbp
0x21bf4fc8263d bd 4889e5 REX.W movq rbp,rsp
0x21bf4fc82640 c0 57 push rdi
0x21bf4fc82641 c1 56 push rsi
0x21bf4fc82642 c2 52 push rdx
0x21bf4fc82643 c3 51 push rcx
0x21bf4fc82644 c4 4150 push r8
0x21bf4fc82646 c6 4151 push r9
0x21bf4fc82648 c8 53 push rbx
0x21bf4fc82649 c9 6a00 push 0x0
0x21bf4fc8264b cb 6a00 push 0x0
0x21bf4fc8264d cd 4889e1 REX.W movq rcx,rsp
0x21bf4fc82650 d0 49bac81e011001000000 REX.W movq r10,0x110011ec8
0x21bf4fc8265a da 492b0a REX.W subq rcx,[r10]
0x21bf4fc8265d dd 0f8616000000 jna 0x21bf4fc82679 <+0xf9>
0x21bf4fc82663 e3 4883f910 REX.W cmpq rcx,0x10
0x21bf4fc82667 e7 0f8378000000 jnc 0x21bf4fc826e5 <+0x165>
0x21bf4fc8266d ed 48c7c0ffffffff REX.W movq rax,0xffffffff
0x21bf4fc82674 f4 e9e5000000 jmp 0x21bf4fc8275e <+0x1de>
0x21bf4fc82679 f9 49b84125c84fbf210000 REX.W movq r8,0x21bf4fc82541 ;; object: 0x21bf4fc82541 <Code REGEXP>
0x21bf4fc82683 103 4989e2 REX.W movq r10,rsp
0x21bf4fc82686 106 4883ec08 REX.W subq rsp,0x8
0x21bf4fc8268a 10a 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc8268e 10e 4c891424 REX.W movq [rsp],r10
0x21bf4fc82692 112 488bd5 REX.W movq rdx,rbp
0x21bf4fc82695 115 498bf0 REX.W movq rsi,r8
0x21bf4fc82698 118 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x21bf4fc8269d 11d 48b81068830001000000 REX.W movq rax,0x100836810
0x21bf4fc826a7 127 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc826ae 12e 49ba7811011001000000 REX.W movq r10,0x110011178
0x21bf4fc826b8 138 4d8912 REX.W movq [r10],r10
0x21bf4fc826bb 13b 49ba7011011001000000 REX.W movq r10,0x110011170
0x21bf4fc826c5 145 49892a REX.W movq [r10],rbp
0x21bf4fc826c8 148 ffd0 call rax
0x21bf4fc826ca 14a 4c8b15ecffffff REX.W movq r10,[rip+0xffffffec]
0x21bf4fc826d1 151 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc826d8 158 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc826dc 15c 4885c0 REX.W testq rax,rax
0x21bf4fc826df 15f 0f8579000000 jnz 0x21bf4fc8275e <+0x1de>
0x21bf4fc826e5 165 4883ec10 REX.W subq rsp,0x10
0x21bf4fc826e9 169 488b75e0 REX.W movq rsi,[rbp-0x20]
0x21bf4fc826ed 16d 488b7de8 REX.W movq rdi,[rbp-0x18]
0x21bf4fc826f1 171 482bfe REX.W subq rdi,rsi
0x21bf4fc826f4 174 488b5df0 REX.W movq rbx,[rbp-0x10]
0x21bf4fc826f8 178 48f7db REX.W negq rbx
0x21bf4fc826fb 17b 488d441fff REX.W leaq rax,[rdi+rbx*1-0x1]
0x21bf4fc82700 180 488945b8 REX.W movq [rbp-0x48],rax
0x21bf4fc82704 184 49b84125c84fbf210000 REX.W movq r8,0x21bf4fc82541 ;; object: 0x21bf4fc82541 <Code REGEXP>
0x21bf4fc8270e 18e 837df000 cmpl [rbp-0x10],0x0
0x21bf4fc82712 192 7507 jnz 0x21bf4fc8271b <+0x19b>
0x21bf4fc82714 194 ba0a000000 movl rdx,0xa
0x21bf4fc82719 199 eb05 jmp 0x21bf4fc82720 <+0x1a0>
0x21bf4fc8271b 19b 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x21bf4fc82720 1a0 488945b0 REX.W movq [rbp-0x50],rax
0x21bf4fc82724 1a4 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc82728 1a8 488b4d10 REX.W movq rcx,[rbp+0x10]
0x21bf4fc8272c 1ac e954feffff jmp 0x21bf4fc82585 <+0x5>
0x21bf4fc82731 1b1 488b55f0 REX.W movq rdx,[rbp-0x10]
0x21bf4fc82735 1b5 488b5dd8 REX.W movq rbx,[rbp-0x28]
0x21bf4fc82739 1b9 488b4de0 REX.W movq rcx,[rbp-0x20]
0x21bf4fc8273d 1bd 482b4de8 REX.W subq rcx,[rbp-0x18]
0x21bf4fc82741 1c1 4803ca REX.W addq rcx,rdx
0x21bf4fc82744 1c4 488b45b0 REX.W movq rax,[rbp-0x50]
0x21bf4fc82748 1c8 4803c1 REX.W addq rax,rcx
0x21bf4fc8274b 1cb 8903 movl [rbx],rax
0x21bf4fc8274d 1cd 488b45a8 REX.W movq rax,[rbp-0x58]
0x21bf4fc82751 1d1 4803c1 REX.W addq rax,rcx
0x21bf4fc82754 1d4 894304 movl [rbx+0x4],rax
0x21bf4fc82757 1d7 48c7c001000000 REX.W movq rax,0x1
0x21bf4fc8275e 1de 488b5dc8 REX.W movq rbx,[rbp-0x38]
0x21bf4fc82762 1e2 488be5 REX.W movq rsp,rbp
0x21bf4fc82765 1e5 5d pop rbp
0x21bf4fc82766 1e6 c3 retl
0x21bf4fc82767 1e7 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc82771 1f1 483be0 REX.W cmpq rsp,rax
0x21bf4fc82774 1f4 0f8705000000 ja 0x21bf4fc8277f <+0x1ff>
0x21bf4fc8277a 1fa e80c000000 call 0x21bf4fc8278b <+0x20b>
0x21bf4fc8277f 1ff 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc82782 202 4883c104 REX.W addq rcx,0x4
0x21bf4fc82786 206 4903d8 REX.W addq rbx,r8
0x21bf4fc82789 209 ffe3 jmp rbx
0x21bf4fc8278b 20b 4c290424 REX.W subq [rsp],r8
0x21bf4fc8278f 20f 51 push rcx
0x21bf4fc82790 210 57 push rdi
0x21bf4fc82791 211 4989e2 REX.W movq r10,rsp
0x21bf4fc82794 214 4883ec08 REX.W subq rsp,0x8
0x21bf4fc82798 218 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc8279c 21c 4c891424 REX.W movq [rsp],r10
0x21bf4fc827a0 220 488bd5 REX.W movq rdx,rbp
0x21bf4fc827a3 223 498bf0 REX.W movq rsi,r8
0x21bf4fc827a6 226 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x21bf4fc827ab 22b 488b05edfeffff REX.W movq rax,[rip+0xfffffeed]
0x21bf4fc827b2 232 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc827b9 239 4c8b15f0feffff REX.W movq r10,[rip+0xfffffef0]
0x21bf4fc827c0 240 4d8912 REX.W movq [r10],r10
0x21bf4fc827c3 243 4c8b15f3feffff REX.W movq r10,[rip+0xfffffef3]
0x21bf4fc827ca 24a 49892a REX.W movq [r10],rbp
0x21bf4fc827cd 24d ffd0 call rax
0x21bf4fc827cf 24f 4c8b15e7feffff REX.W movq r10,[rip+0xfffffee7]
0x21bf4fc827d6 256 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc827dd 25d 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc827e1 261 4885c0 REX.W testq rax,rax
0x21bf4fc827e4 264 0f8574ffffff jnz 0x21bf4fc8275e <+0x1de>
0x21bf4fc827ea 26a 49b84125c84fbf210000 REX.W movq r8,0x21bf4fc82541 ;; object: 0x21bf4fc82541 <Code REGEXP>
0x21bf4fc827f4 274 5f pop rdi
0x21bf4fc827f5 275 59 pop rcx
0x21bf4fc827f6 276 488b75e0 REX.W movq rsi,[rbp-0x20]
0x21bf4fc827fa 27a 4c010424 REX.W addq [rsp],r8
0x21bf4fc827fe 27e c3 retl
0x21bf4fc827ff 27f 4c290424 REX.W subq [rsp],r8
0x21bf4fc82803 283 56 push rsi
0x21bf4fc82804 284 57 push rdi
0x21bf4fc82805 285 4989e2 REX.W movq r10,rsp
0x21bf4fc82808 288 4883ec08 REX.W subq rsp,0x8
0x21bf4fc8280c 28c 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc82810 290 4c891424 REX.W movq [rsp],r10
0x21bf4fc82814 294 488bf9 REX.W movq rdi,rcx
0x21bf4fc82817 297 488d7510 REX.W leaq rsi,[rbp+0x10]
0x21bf4fc8281b 29b 48ba0080001001000000 REX.W movq rdx,0x110008000
0x21bf4fc82825 2a5 48b8e0435c0001000000 REX.W movq rax,0x1005c43e0
0x21bf4fc8282f 2af 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc82836 2b6 4c8b1573feffff REX.W movq r10,[rip+0xfffffe73]
0x21bf4fc8283d 2bd 4d8912 REX.W movq [r10],r10
0x21bf4fc82840 2c0 4c8b1576feffff REX.W movq r10,[rip+0xfffffe76]
0x21bf4fc82847 2c7 49892a REX.W movq [r10],rbp
0x21bf4fc8284a 2ca ffd0 call rax
0x21bf4fc8284c 2cc 4c8b156afeffff REX.W movq r10,[rip+0xfffffe6a]
0x21bf4fc82853 2d3 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc8285a 2da 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc8285e 2de 4885c0 REX.W testq rax,rax
0x21bf4fc82861 2e1 0f8414000000 jz 0x21bf4fc8287b <+0x2fb>
0x21bf4fc82867 2e7 488bc8 REX.W movq rcx,rax
0x21bf4fc8286a 2ea 49b84125c84fbf210000 REX.W movq r8,0x21bf4fc82541 ;; object: 0x21bf4fc82541 <Code REGEXP>
0x21bf4fc82874 2f4 5f pop rdi
0x21bf4fc82875 2f5 5e pop rsi
0x21bf4fc82876 2f6 4c010424 REX.W addq [rsp],r8
0x21bf4fc8287a 2fa c3 retl
0x21bf4fc8287b 2fb 48c7c0ffffffff REX.W movq rax,0xffffffff
0x21bf4fc82882 302 e9d7feffff jmp 0x21bf4fc8275e <+0x1de>

RelocInfo (size = 12)
0x21bf4fc8267b full embedded object (0x21bf4fc82541 <Code REGEXP>)
0x21bf4fc82706 full embedded object (0x21bf4fc82541 <Code REGEXP>)
0x21bf4fc827ec full embedded object (0x21bf4fc82541 <Code REGEXP>)
0x21bf4fc8286c full embedded object (0x21bf4fc82541 <Code REGEXP>)

kind = REGEXP
name = (?:^|\/)\.?\.$
compiler = unknown
address = 0x7ffeefbfdfd0

Instructions (size = 1506)
0x21bf4fc828e0 0 e992030000 jmp 0x21bf4fc82c77 <+0x397>
0x21bf4fc828e5 5 4883fffd REX.W cmpq rdi,0xfd
0x21bf4fc828e9 9 7d0c jge 0x21bf4fc828f7 <+0x17>
0x21bf4fc828eb b 48c7c7fdffffff REX.W movq rdi,0xfffffffd
0x21bf4fc828f2 12 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x21bf4fc828f7 17 4883e904 REX.W subq rcx,0x4
0x21bf4fc828fb 1b c701cf030000 movl [rcx],0x3cf
0x21bf4fc82901 21 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc8290b 2b 483bc8 REX.W cmpq rcx,rax
0x21bf4fc8290e 2e 0f8705000000 ja 0x21bf4fc82919 <+0x39>
0x21bf4fc82914 34 e821050000 call 0x21bf4fc82e3a <+0x55a>
0x21bf4fc82919 39 83ff00 cmpl rdi,0x0
0x21bf4fc8291c 3c 0f8d80040000 jge 0x21bf4fc82da2 <+0x4c2>
0x21bf4fc82922 42 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x21bf4fc82926 46 b8fe000000 movl rax,0xfe
0x21bf4fc8292b 4b 4823c2 REX.W andq rax,rdx
0x21bf4fc8292e 4e 83f82e cmpl rax,0x2e
0x21bf4fc82931 51 0f8441010000 jz 0x21bf4fc82a78 <+0x198>
0x21bf4fc82937 57 4883c701 REX.W addq rdi,0x1
0x21bf4fc8293b 5b 83ff00 cmpl rdi,0x0
0x21bf4fc8293e 5e 0f8d26000000 jge 0x21bf4fc8296a <+0x8a>
0x21bf4fc82944 64 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x21bf4fc82948 68 48b8d1c620f3fc270000 REX.W movq rax,0x27fcf320c6d1 ;; object: 0x27fcf320c6d1 <ByteArray[128]>
0x21bf4fc82952 72 488bda REX.W movq rbx,rdx
0x21bf4fc82955 75 4883e37f REX.W andq rbx,0x7f
0x21bf4fc82959 79 807c180f00 cmpb [rax+rbx*1+0xf],0x0
0x21bf4fc8295e 7e 0f8506000000 jnz 0x21bf4fc8296a <+0x8a>
0x21bf4fc82964 84 4883c701 REX.W addq rdi,0x1
0x21bf4fc82968 88 ebd1 jmp 0x21bf4fc8293b <+0x5b>
0x21bf4fc8296a 8a 83ff00 cmpl rdi,0x0
0x21bf4fc8296d 8d 0f8d2f040000 jge 0x21bf4fc82da2 <+0x4c2>
0x21bf4fc82973 93 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x21bf4fc82977 97 83fa2f cmpl rdx,0x2f
0x21bf4fc8297a 9a 0f8406000000 jz 0x21bf4fc82986 <+0xa6>
0x21bf4fc82980 a0 4883c701 REX.W addq rdi,0x1
0x21bf4fc82984 a4 ebb5 jmp 0x21bf4fc8293b <+0x5b>
0x21bf4fc82986 a6 83ffff cmpl rdi,0xff
0x21bf4fc82989 a9 7df5 jge 0x21bf4fc82980 <+0xa0>
0x21bf4fc8298b ab 0fb7143e movzxwl rdx,[rsi+rdi*1]
0x21bf4fc8298f af 81fa2f2e0000 cmpl rdx,0x2e2f
0x21bf4fc82995 b5 75e9 jnz 0x21bf4fc82980 <+0xa0>
0x21bf4fc82997 b7 83ffff cmpl rdi,0xff
0x21bf4fc8299a ba 7de4 jge 0x21bf4fc82980 <+0xa0>
0x21bf4fc8299c bc 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x21bf4fc829a1 c1 83fa2e cmpl rdx,0x2e
0x21bf4fc829a4 c4 0f8456000000 jz 0x21bf4fc82a00 <+0x120>
0x21bf4fc829aa ca 83fa2e cmpl rdx,0x2e
0x21bf4fc829ad cd 75d1 jnz 0x21bf4fc82980 <+0xa0>
0x21bf4fc829af cf 83fffe cmpl rdi,0xfe
0x21bf4fc829b2 d2 0f8d02000000 jge 0x21bf4fc829ba <+0xda>
0x21bf4fc829b8 d8 ebc6 jmp 0x21bf4fc82980 <+0xa0>
0x21bf4fc829ba da 4883e904 REX.W subq rcx,0x4
0x21bf4fc829be de 8939 movl [rcx],rdi
0x21bf4fc829c0 e0 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc829c4 e4 488d4702 REX.W leaq rax,[rdi+0x2]
0x21bf4fc829c8 e8 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc829cc ec 4883c702 REX.W addq rdi,0x2
0x21bf4fc829d0 f0 4883e904 REX.W subq rcx,0x4
0x21bf4fc829d4 f4 c70156010000 movl [rcx],0x156
0x21bf4fc829da fa 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc829e4 104 483bc8 REX.W cmpq rcx,rax
0x21bf4fc829e7 107 0f8705000000 ja 0x21bf4fc829f2 <+0x112>
0x21bf4fc829ed 10d e848040000 call 0x21bf4fc82e3a <+0x55a>
0x21bf4fc829f2 112 e975030000 jmp 0x21bf4fc82d6c <+0x48c>
0x21bf4fc829f7 117 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc829fa 11a 4883c104 REX.W addq rcx,0x4
0x21bf4fc829fe 11e eb80 jmp 0x21bf4fc82980 <+0xa0>
0x21bf4fc82a00 120 83fffe cmpl rdi,0xfe
0x21bf4fc82a03 123 0f8d65000000 jge 0x21bf4fc82a6e <+0x18e>
0x21bf4fc82a09 129 0fb6543e02 movzxbl rdx,[rsi+rdi*1+0x2]
0x21bf4fc82a0e 12e 83fa2e cmpl rdx,0x2e
0x21bf4fc82a11 131 0f8557000000 jnz 0x21bf4fc82a6e <+0x18e>
0x21bf4fc82a17 137 83fffd cmpl rdi,0xfd
0x21bf4fc82a1a 13a 0f8d05000000 jge 0x21bf4fc82a25 <+0x145>
0x21bf4fc82a20 140 e949000000 jmp 0x21bf4fc82a6e <+0x18e>
0x21bf4fc82a25 145 4883e904 REX.W subq rcx,0x4
0x21bf4fc82a29 149 8939 movl [rcx],rdi
0x21bf4fc82a2b 14b 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc82a2f 14f 488d4703 REX.W leaq rax,[rdi+0x3]
0x21bf4fc82a33 153 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc82a37 157 4883c703 REX.W addq rdi,0x3
0x21bf4fc82a3b 15b 4883e904 REX.W subq rcx,0x4
0x21bf4fc82a3f 15f c701c1010000 movl [rcx],0x1c1
0x21bf4fc82a45 165 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc82a4f 16f 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82a52 172 0f8705000000 ja 0x21bf4fc82a5d <+0x17d>
0x21bf4fc82a58 178 e8dd030000 call 0x21bf4fc82e3a <+0x55a>
0x21bf4fc82a5d 17d e90a030000 jmp 0x21bf4fc82d6c <+0x48c>
0x21bf4fc82a62 182 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc82a65 185 4883c104 REX.W addq rcx,0x4
0x21bf4fc82a69 189 e900000000 jmp 0x21bf4fc82a6e <+0x18e>
0x21bf4fc82a6e 18e 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x21bf4fc82a73 193 e932ffffff jmp 0x21bf4fc829aa <+0xca>
0x21bf4fc82a78 198 83fa2e cmpl rdx,0x2e
0x21bf4fc82a7b 19b 0f84f8000000 jz 0x21bf4fc82b79 <+0x299>
0x21bf4fc82a81 1a1 83fa2f cmpl rdx,0x2f
0x21bf4fc82a84 1a4 0f85adfeffff jnz 0x21bf4fc82937 <+0x57>
0x21bf4fc82a8a 1aa 83ffff cmpl rdi,0xff
0x21bf4fc82a8d 1ad 0f8da4feffff jge 0x21bf4fc82937 <+0x57>
0x21bf4fc82a93 1b3 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x21bf4fc82a98 1b8 83fa2e cmpl rdx,0x2e
0x21bf4fc82a9b 1bb 0f8460000000 jz 0x21bf4fc82b01 <+0x221>
0x21bf4fc82aa1 1c1 83fa2e cmpl rdx,0x2e
0x21bf4fc82aa4 1c4 0f858dfeffff jnz 0x21bf4fc82937 <+0x57>
0x21bf4fc82aaa 1ca 83fffe cmpl rdi,0xfe
0x21bf4fc82aad 1cd 0f8d05000000 jge 0x21bf4fc82ab8 <+0x1d8>
0x21bf4fc82ab3 1d3 e97ffeffff jmp 0x21bf4fc82937 <+0x57>
0x21bf4fc82ab8 1d8 4883e904 REX.W subq rcx,0x4
0x21bf4fc82abc 1dc 8939 movl [rcx],rdi
0x21bf4fc82abe 1de 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc82ac2 1e2 488d4702 REX.W leaq rax,[rdi+0x2]
0x21bf4fc82ac6 1e6 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc82aca 1ea 4883c702 REX.W addq rdi,0x2
0x21bf4fc82ace 1ee 4883e904 REX.W subq rcx,0x4
0x21bf4fc82ad2 1f2 c70154020000 movl [rcx],0x254
0x21bf4fc82ad8 1f8 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc82ae2 202 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82ae5 205 0f8705000000 ja 0x21bf4fc82af0 <+0x210>
0x21bf4fc82aeb 20b e84a030000 call 0x21bf4fc82e3a <+0x55a>
0x21bf4fc82af0 210 e977020000 jmp 0x21bf4fc82d6c <+0x48c>
0x21bf4fc82af5 215 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc82af8 218 4883c104 REX.W addq rcx,0x4
0x21bf4fc82afc 21c e936feffff jmp 0x21bf4fc82937 <+0x57>
0x21bf4fc82b01 221 83fffe cmpl rdi,0xfe
0x21bf4fc82b04 224 0f8d65000000 jge 0x21bf4fc82b6f <+0x28f>
0x21bf4fc82b0a 22a 0fb6543e02 movzxbl rdx,[rsi+rdi*1+0x2]
0x21bf4fc82b0f 22f 83fa2e cmpl rdx,0x2e
0x21bf4fc82b12 232 0f8557000000 jnz 0x21bf4fc82b6f <+0x28f>
0x21bf4fc82b18 238 83fffd cmpl rdi,0xfd
0x21bf4fc82b1b 23b 0f8d05000000 jge 0x21bf4fc82b26 <+0x246>
0x21bf4fc82b21 241 e949000000 jmp 0x21bf4fc82b6f <+0x28f>
0x21bf4fc82b26 246 4883e904 REX.W subq rcx,0x4
0x21bf4fc82b2a 24a 8939 movl [rcx],rdi
0x21bf4fc82b2c 24c 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc82b30 250 488d4703 REX.W leaq rax,[rdi+0x3]
0x21bf4fc82b34 254 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc82b38 258 4883c703 REX.W addq rdi,0x3
0x21bf4fc82b3c 25c 4883e904 REX.W subq rcx,0x4
0x21bf4fc82b40 260 c701c2020000 movl [rcx],0x2c2
0x21bf4fc82b46 266 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc82b50 270 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82b53 273 0f8705000000 ja 0x21bf4fc82b5e <+0x27e>
0x21bf4fc82b59 279 e8dc020000 call 0x21bf4fc82e3a <+0x55a>
0x21bf4fc82b5e 27e e909020000 jmp 0x21bf4fc82d6c <+0x48c>
0x21bf4fc82b63 283 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc82b66 286 4883c104 REX.W addq rcx,0x4
0x21bf4fc82b6a 28a e900000000 jmp 0x21bf4fc82b6f <+0x28f>
0x21bf4fc82b6f 28f 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x21bf4fc82b74 294 e928ffffff jmp 0x21bf4fc82aa1 <+0x1c1>
0x21bf4fc82b79 299 488d47ff REX.W leaq rax,[rdi-0x1]
0x21bf4fc82b7d 29d 483b45b8 REX.W cmpq rax,[rbp-0x48]
0x21bf4fc82b81 2a1 0f85e0000000 jnz 0x21bf4fc82c67 <+0x387>
0x21bf4fc82b87 2a7 83fa2e cmpl rdx,0x2e
0x21bf4fc82b8a 2aa 0f8460000000 jz 0x21bf4fc82bf0 <+0x310>
0x21bf4fc82b90 2b0 83fa2e cmpl rdx,0x2e
0x21bf4fc82b93 2b3 0f85ce000000 jnz 0x21bf4fc82c67 <+0x387>
0x21bf4fc82b99 2b9 83ffff cmpl rdi,0xff
0x21bf4fc82b9c 2bc 0f8d05000000 jge 0x21bf4fc82ba7 <+0x2c7>
0x21bf4fc82ba2 2c2 e9c0000000 jmp 0x21bf4fc82c67 <+0x387>
0x21bf4fc82ba7 2c7 4883e904 REX.W subq rcx,0x4
0x21bf4fc82bab 2cb 8939 movl [rcx],rdi
0x21bf4fc82bad 2cd 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc82bb1 2d1 488d4701 REX.W leaq rax,[rdi+0x1]
0x21bf4fc82bb5 2d5 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc82bb9 2d9 4883c701 REX.W addq rdi,0x1
0x21bf4fc82bbd 2dd 4883e904 REX.W subq rcx,0x4
0x21bf4fc82bc1 2e1 c70143030000 movl [rcx],0x343
0x21bf4fc82bc7 2e7 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc82bd1 2f1 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82bd4 2f4 0f8705000000 ja 0x21bf4fc82bdf <+0x2ff>
0x21bf4fc82bda 2fa e85b020000 call 0x21bf4fc82e3a <+0x55a>
0x21bf4fc82bdf 2ff e988010000 jmp 0x21bf4fc82d6c <+0x48c>
0x21bf4fc82be4 304 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc82be7 307 4883c104 REX.W addq rcx,0x4
0x21bf4fc82beb 30b e977000000 jmp 0x21bf4fc82c67 <+0x387>
0x21bf4fc82bf0 310 83ffff cmpl rdi,0xff
0x21bf4fc82bf3 313 0f8d65000000 jge 0x21bf4fc82c5e <+0x37e>
0x21bf4fc82bf9 319 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x21bf4fc82bfe 31e 83fa2e cmpl rdx,0x2e
0x21bf4fc82c01 321 0f8557000000 jnz 0x21bf4fc82c5e <+0x37e>
0x21bf4fc82c07 327 83fffe cmpl rdi,0xfe
0x21bf4fc82c0a 32a 0f8d05000000 jge 0x21bf4fc82c15 <+0x335>
0x21bf4fc82c10 330 e949000000 jmp 0x21bf4fc82c5e <+0x37e>
0x21bf4fc82c15 335 4883e904 REX.W subq rcx,0x4
0x21bf4fc82c19 339 8939 movl [rcx],rdi
0x21bf4fc82c1b 33b 48897db0 REX.W movq [rbp-0x50],rdi
0x21bf4fc82c1f 33f 488d4702 REX.W leaq rax,[rdi+0x2]
0x21bf4fc82c23 343 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc82c27 347 4883c702 REX.W addq rdi,0x2
0x21bf4fc82c2b 34b 4883e904 REX.W subq rcx,0x4
0x21bf4fc82c2f 34f c701b1030000 movl [rcx],0x3b1
0x21bf4fc82c35 355 48a12019b10201000000 REX.W movq rax,(0x102b11920)
0x21bf4fc82c3f 35f 483bc8 REX.W cmpq rcx,rax
0x21bf4fc82c42 362 0f8705000000 ja 0x21bf4fc82c4d <+0x36d>
0x21bf4fc82c48 368 e8ed010000 call 0x21bf4fc82e3a <+0x55a>
0x21bf4fc82c4d 36d e91a010000 jmp 0x21bf4fc82d6c <+0x48c>
0x21bf4fc82c52 372 486339 REX.W movsxlq rdi,[rcx]
0x21bf4fc82c55 375 4883c104 REX.W addq rcx,0x4
0x21bf4fc82c59 379 e900000000 jmp 0x21bf4fc82c5e <+0x37e>
0x21bf4fc82c5e 37e 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x21bf4fc82c62 382 e929ffffff jmp 0x21bf4fc82b90 <+0x2b0>
0x21bf4fc82c67 387 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x21bf4fc82c6b 38b e911feffff jmp 0x21bf4fc82a81 <+0x1a1>
0x21bf4fc82c70 390 33c0 xorl rax,rax
0x21bf4fc82c72 392 e922010000 jmp 0x21bf4fc82d99 <+0x4b9>
0x21bf4fc82c77 397 55 push rbp
0x21bf4fc82c78 398 4889e5 REX.W movq rbp,rsp
0x21bf4fc82c7b 39b 57 push rdi
0x21bf4fc82c7c 39c 56 push rsi
0x21bf4fc82c7d 39d 52 push rdx
0x21bf4fc82c7e 39e 51 push rcx
0x21bf4fc82c7f 39f 4150 push r8
0x21bf4fc82c81 3a1 4151 push r9
0x21bf4fc82c83 3a3 53 push rbx
0x21bf4fc82c84 3a4 6a00 push 0x0
0x21bf4fc82c86 3a6 6a00 push 0x0
0x21bf4fc82c88 3a8 4889e1 REX.W movq rcx,rsp
0x21bf4fc82c8b 3ab 49bac81e011001000000 REX.W movq r10,0x110011ec8
0x21bf4fc82c95 3b5 492b0a REX.W subq rcx,[r10]
0x21bf4fc82c98 3b8 0f8616000000 jna 0x21bf4fc82cb4 <+0x3d4>
0x21bf4fc82c9e 3be 4883f910 REX.W cmpq rcx,0x10
0x21bf4fc82ca2 3c2 0f8378000000 jnc 0x21bf4fc82d20 <+0x440>
0x21bf4fc82ca8 3c8 48c7c0ffffffff REX.W movq rax,0xffffffff
0x21bf4fc82caf 3cf e9e5000000 jmp 0x21bf4fc82d99 <+0x4b9>
0x21bf4fc82cb4 3d4 49b8a128c84fbf210000 REX.W movq r8,0x21bf4fc828a1 ;; object: 0x21bf4fc828a1 <Code REGEXP>
0x21bf4fc82cbe 3de 4989e2 REX.W movq r10,rsp
0x21bf4fc82cc1 3e1 4883ec08 REX.W subq rsp,0x8
0x21bf4fc82cc5 3e5 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc82cc9 3e9 4c891424 REX.W movq [rsp],r10
0x21bf4fc82ccd 3ed 488bd5 REX.W movq rdx,rbp
0x21bf4fc82cd0 3f0 498bf0 REX.W movq rsi,r8
0x21bf4fc82cd3 3f3 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x21bf4fc82cd8 3f8 48b81068830001000000 REX.W movq rax,0x100836810
0x21bf4fc82ce2 402 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc82ce9 409 49ba7811011001000000 REX.W movq r10,0x110011178
0x21bf4fc82cf3 413 4d8912 REX.W movq [r10],r10
0x21bf4fc82cf6 416 49ba7011011001000000 REX.W movq r10,0x110011170
0x21bf4fc82d00 420 49892a REX.W movq [r10],rbp
0x21bf4fc82d03 423 ffd0 call rax
0x21bf4fc82d05 425 4c8b15ecffffff REX.W movq r10,[rip+0xffffffec]
0x21bf4fc82d0c 42c 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc82d13 433 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc82d17 437 4885c0 REX.W testq rax,rax
0x21bf4fc82d1a 43a 0f8579000000 jnz 0x21bf4fc82d99 <+0x4b9>
0x21bf4fc82d20 440 4883ec10 REX.W subq rsp,0x10
0x21bf4fc82d24 444 488b75e0 REX.W movq rsi,[rbp-0x20]
0x21bf4fc82d28 448 488b7de8 REX.W movq rdi,[rbp-0x18]
0x21bf4fc82d2c 44c 482bfe REX.W subq rdi,rsi
0x21bf4fc82d2f 44f 488b5df0 REX.W movq rbx,[rbp-0x10]
0x21bf4fc82d33 453 48f7db REX.W negq rbx
0x21bf4fc82d36 456 488d441fff REX.W leaq rax,[rdi+rbx*1-0x1]
0x21bf4fc82d3b 45b 488945b8 REX.W movq [rbp-0x48],rax
0x21bf4fc82d3f 45f 49b8a128c84fbf210000 REX.W movq r8,0x21bf4fc828a1 ;; object: 0x21bf4fc828a1 <Code REGEXP>
0x21bf4fc82d49 469 837df000 cmpl [rbp-0x10],0x0
0x21bf4fc82d4d 46d 7507 jnz 0x21bf4fc82d56 <+0x476>
0x21bf4fc82d4f 46f ba0a000000 movl rdx,0xa
0x21bf4fc82d54 474 eb05 jmp 0x21bf4fc82d5b <+0x47b>
0x21bf4fc82d56 476 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x21bf4fc82d5b 47b 488945b0 REX.W movq [rbp-0x50],rax
0x21bf4fc82d5f 47f 488945a8 REX.W movq [rbp-0x58],rax
0x21bf4fc82d63 483 488b4d10 REX.W movq rcx,[rbp+0x10]
0x21bf4fc82d67 487 e979fbffff jmp 0x21bf4fc828e5 <+0x5>
0x21bf4fc82d6c 48c 488b55f0 REX.W movq rdx,[rbp-0x10]
0x21bf4fc82d70 490 488b5dd8 REX.W movq rbx,[rbp-0x28]
0x21bf4fc82d74 494 488b4de0 REX.W movq rcx,[rbp-0x20]
0x21bf4fc82d78 498 482b4de8 REX.W subq rcx,[rbp-0x18]
0x21bf4fc82d7c 49c 4803ca REX.W addq rcx,rdx
0x21bf4fc82d7f 49f 488b45b0 REX.W movq rax,[rbp-0x50]
0x21bf4fc82d83 4a3 4803c1 REX.W addq rax,rcx
0x21bf4fc82d86 4a6 8903 movl [rbx],rax
0x21bf4fc82d88 4a8 488b45a8 REX.W movq rax,[rbp-0x58]
0x21bf4fc82d8c 4ac 4803c1 REX.W addq rax,rcx
0x21bf4fc82d8f 4af 894304 movl [rbx+0x4],rax
0x21bf4fc82d92 4b2 48c7c001000000 REX.W movq rax,0x1
0x21bf4fc82d99 4b9 488b5dc8 REX.W movq rbx,[rbp-0x38]
0x21bf4fc82d9d 4bd 488be5 REX.W movq rsp,rbp
0x21bf4fc82da0 4c0 5d pop rbp
0x21bf4fc82da1 4c1 c3 retl
0x21bf4fc82da2 4c2 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x21bf4fc82dac 4cc 483be0 REX.W cmpq rsp,rax
0x21bf4fc82daf 4cf 0f8705000000 ja 0x21bf4fc82dba <+0x4da>
0x21bf4fc82db5 4d5 e80c000000 call 0x21bf4fc82dc6 <+0x4e6>
0x21bf4fc82dba 4da 486319 REX.W movsxlq rbx,[rcx]
0x21bf4fc82dbd 4dd 4883c104 REX.W addq rcx,0x4
0x21bf4fc82dc1 4e1 4903d8 REX.W addq rbx,r8
0x21bf4fc82dc4 4e4 ffe3 jmp rbx
0x21bf4fc82dc6 4e6 4c290424 REX.W subq [rsp],r8
0x21bf4fc82dca 4ea 51 push rcx
0x21bf4fc82dcb 4eb 57 push rdi
0x21bf4fc82dcc 4ec 4989e2 REX.W movq r10,rsp
0x21bf4fc82dcf 4ef 4883ec08 REX.W subq rsp,0x8
0x21bf4fc82dd3 4f3 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc82dd7 4f7 4c891424 REX.W movq [rsp],r10
0x21bf4fc82ddb 4fb 488bd5 REX.W movq rdx,rbp
0x21bf4fc82dde 4fe 498bf0 REX.W movq rsi,r8
0x21bf4fc82de1 501 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x21bf4fc82de6 506 488b05edfeffff REX.W movq rax,[rip+0xfffffeed]
0x21bf4fc82ded 50d 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc82df4 514 4c8b15f0feffff REX.W movq r10,[rip+0xfffffef0]
0x21bf4fc82dfb 51b 4d8912 REX.W movq [r10],r10
0x21bf4fc82dfe 51e 4c8b15f3feffff REX.W movq r10,[rip+0xfffffef3]
0x21bf4fc82e05 525 49892a REX.W movq [r10],rbp
0x21bf4fc82e08 528 ffd0 call rax
0x21bf4fc82e0a 52a 4c8b15e7feffff REX.W movq r10,[rip+0xfffffee7]
0x21bf4fc82e11 531 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc82e18 538 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc82e1c 53c 4885c0 REX.W testq rax,rax
0x21bf4fc82e1f 53f 0f8574ffffff jnz 0x21bf4fc82d99 <+0x4b9>
0x21bf4fc82e25 545 49b8a128c84fbf210000 REX.W movq r8,0x21bf4fc828a1 ;; object: 0x21bf4fc828a1 <Code REGEXP>
0x21bf4fc82e2f 54f 5f pop rdi
0x21bf4fc82e30 550 59 pop rcx
0x21bf4fc82e31 551 488b75e0 REX.W movq rsi,[rbp-0x20]
0x21bf4fc82e35 555 4c010424 REX.W addq [rsp],r8
0x21bf4fc82e39 559 c3 retl
0x21bf4fc82e3a 55a 4c290424 REX.W subq [rsp],r8
0x21bf4fc82e3e 55e 56 push rsi
0x21bf4fc82e3f 55f 57 push rdi
0x21bf4fc82e40 560 4989e2 REX.W movq r10,rsp
0x21bf4fc82e43 563 4883ec08 REX.W subq rsp,0x8
0x21bf4fc82e47 567 4883e4f0 REX.W andq rsp,0xf0
0x21bf4fc82e4b 56b 4c891424 REX.W movq [rsp],r10
0x21bf4fc82e4f 56f 488bf9 REX.W movq rdi,rcx
0x21bf4fc82e52 572 488d7510 REX.W leaq rsi,[rbp+0x10]
0x21bf4fc82e56 576 48ba0080001001000000 REX.W movq rdx,0x110008000
0x21bf4fc82e60 580 48b8e0435c0001000000 REX.W movq rax,0x1005c43e0
0x21bf4fc82e6a 58a 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x21bf4fc82e71 591 4c8b1573feffff REX.W movq r10,[rip+0xfffffe73]
0x21bf4fc82e78 598 4d8912 REX.W movq [r10],r10
0x21bf4fc82e7b 59b 4c8b1576feffff REX.W movq r10,[rip+0xfffffe76]
0x21bf4fc82e82 5a2 49892a REX.W movq [r10],rbp
0x21bf4fc82e85 5a5 ffd0 call rax
0x21bf4fc82e87 5a7 4c8b156afeffff REX.W movq r10,[rip+0xfffffe6a]
0x21bf4fc82e8e 5ae 49c70200000000 REX.W movq [r10],0x0
0x21bf4fc82e95 5b5 488b2424 REX.W movq rsp,[rsp]
0x21bf4fc82e99 5b9 4885c0 REX.W testq rax,rax
0x21bf4fc82e9c 5bc 0f8414000000 jz 0x21bf4fc82eb6 <+0x5d6>
0x21bf4fc82ea2 5c2 488bc8 REX.W movq rcx,rax
0x21bf4fc82ea5 5c5 49b8a128c84fbf210000 REX.W movq r8,0x21bf4fc828a1 ;; object: 0x21bf4fc828a1 <Code REGEXP>
0x21bf4fc82eaf 5cf 5f pop rdi
0x21bf4fc82eb0 5d0 5e pop rsi
0x21bf4fc82eb1 5d1 4c010424 REX.W addq [rsp],r8
0x21bf4fc82eb5 5d5 c3 retl
0x21bf4fc82eb6 5d6 48c7c0ffffffff REX.W movq rax,0xffffffff
0x21bf4fc82ebd 5dd e9d7feffff jmp 0x21bf4fc82d99 <+0x4b9>

RelocInfo (size = 15)
0x21bf4fc8294a full embedded object (0x27fcf320c6d1 <ByteArray[128]>)
0x21bf4fc82cb6 full embedded object (0x21bf4fc828a1 <Code REGEXP>)
0x21bf4fc82d41 full embedded object (0x21bf4fc828a1 <Code REGEXP>)
0x21bf4fc82e27 full embedded object (0x21bf4fc828a1 <Code REGEXP>)
0x21bf4fc82ea7 full embedded object (0x21bf4fc828a1 <Code REGEXP>)

2

</code></pre>

</details>

#### しない方

> [81320:0x108008000] 41 ms: Scavenge 2.3 (3.0) -> 1.9 (4.0) MB, 1.4 / 0.0 ms (average mu = 1.000, current mu = 1.000) allocation failure

<details>
<summary>中間コード</summary>
<pre>
<code>
kind = REGEXP
name = ^([A-Z][a-z]+)+$
compiler = unknown
address = 0x7ffeefbfdbe0

Instructions (size = 1263)
0x102cf2902040 0 e983020000 jmp 0x102cf29022c8 <+0x288>
0x102cf2902045 5 4883e904 REX.W subq rcx,0x4
0x102cf2902049 9 c701c0020000 movl [rcx],0x2c0
0x102cf290204f f 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf2902059 19 483bc8 REX.W cmpq rcx,rax
0x102cf290205c 1c 0f8705000000 ja 0x102cf2902067 <+0x27>
0x102cf2902062 22 e840040000 call 0x102cf29024a7 <+0x467>
0x102cf2902067 27 488d47ff REX.W leaq rax,[rdi-0x1]
0x102cf290206b 2b 483b45b8 REX.W cmpq rax,[rbp-0x48]
0x102cf290206f 2f 0f859a030000 jnz 0x102cf290240f <+0x3cf>
0x102cf2902075 35 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf2902079 39 488b4590 REX.W movq rax,[rbp-0x70]
0x102cf290207d 3d 4883e904 REX.W subq rcx,0x4
0x102cf2902081 41 8901 movl [rcx],rax
0x102cf2902083 43 48c7459000000000 REX.W movq [rbp-0x70],0x0
0x102cf290208b 4b 4883e904 REX.W subq rcx,0x4
0x102cf290208f 4f c70191020000 movl [rcx],0x291
0x102cf2902095 55 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf290209f 5f 483bc8 REX.W cmpq rcx,rax
0x102cf29020a2 62 0f8705000000 ja 0x102cf29020ad <+0x6d>
0x102cf29020a8 68 e8fa030000 call 0x102cf29024a7 <+0x467>
0x102cf29020ad 6d 83ff00 cmpl rdi,0x0
0x102cf29020b0 70 0f8d55010000 jge 0x102cf290220b <+0x1cb>
0x102cf29020b6 76 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x102cf29020ba 7a 8d42bf leal rax,[rdx-0x41]
0x102cf29020bd 7d 83f819 cmpl rax,0x19
0x102cf29020c0 80 0f8745010000 ja 0x102cf290220b <+0x1cb>
0x102cf29020c6 86 83ffff cmpl rdi,0xff
0x102cf29020c9 89 0f8d3c010000 jge 0x102cf290220b <+0x1cb>
0x102cf29020cf 8f 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x102cf29020d4 94 8d429f leal rax,[rdx-0x61]
0x102cf29020d7 97 83f819 cmpl rax,0x19
0x102cf29020da 9a 0f872b010000 ja 0x102cf290220b <+0x1cb>
0x102cf29020e0 a0 4883e904 REX.W subq rcx,0x4
0x102cf29020e4 a4 8939 movl [rcx],rdi
0x102cf29020e6 a6 488b45a0 REX.W movq rax,[rbp-0x60]
0x102cf29020ea aa 4883e904 REX.W subq rcx,0x4
0x102cf29020ee ae 8901 movl [rcx],rax
0x102cf29020f0 b0 48897da0 REX.W movq [rbp-0x60],rdi
0x102cf29020f4 b4 488b4598 REX.W movq rax,[rbp-0x68]
0x102cf29020f8 b8 4883e904 REX.W subq rcx,0x4
0x102cf29020fc bc 8901 movl [rcx],rax
0x102cf29020fe be 488b45b8 REX.W movq rax,[rbp-0x48]
0x102cf2902102 c2 48894598 REX.W movq [rbp-0x68],rax
0x102cf2902106 c6 4883c702 REX.W addq rdi,0x2
0x102cf290210a ca 4883e904 REX.W subq rcx,0x4
0x102cf290210e ce c701e8010000 movl [rcx],0x1e8
0x102cf2902114 d4 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf290211e de 483bc8 REX.W cmpq rcx,rax
0x102cf2902121 e1 0f8705000000 ja 0x102cf290212c <+0xec>
0x102cf2902127 e7 e87b030000 call 0x102cf29024a7 <+0x467>
0x102cf290212c ec 4883e904 REX.W subq rcx,0x4
0x102cf2902130 f0 8939 movl [rcx],rdi
0x102cf2902132 f2 83ff00 cmpl rdi,0x0
0x102cf2902135 f5 0f8d16000000 jge 0x102cf2902151 <+0x111>
0x102cf290213b fb 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x102cf290213f ff 8d429f leal rax,[rdx-0x61]
0x102cf2902142 102 83f819 cmpl rax,0x19
0x102cf2902145 105 0f8706000000 ja 0x102cf2902151 <+0x111>
0x102cf290214b 10b 4883c701 REX.W addq rdi,0x1
0x102cf290214f 10f ebe1 jmp 0x102cf2902132 <+0xf2>
0x102cf2902151 111 4883e904 REX.W subq rcx,0x4
0x102cf2902155 115 8939 movl [rcx],rdi
0x102cf2902157 117 48897d98 REX.W movq [rbp-0x68],rdi
0x102cf290215b 11b 488b4590 REX.W movq rax,[rbp-0x70]
0x102cf290215f 11f 4883e904 REX.W subq rcx,0x4
0x102cf2902163 123 8901 movl [rcx],rax
0x102cf2902165 125 4883459001 REX.W addq [rbp-0x70],0x1
0x102cf290216a 12a 4883e904 REX.W subq rcx,0x4
0x102cf290216e 12e c70190010000 movl [rcx],0x190
0x102cf2902174 134 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf290217e 13e 483bc8 REX.W cmpq rcx,rax
0x102cf2902181 141 0f8705000000 ja 0x102cf290218c <+0x14c>
0x102cf2902187 147 e81b030000 call 0x102cf29024a7 <+0x467>
0x102cf290218c 14c e91cffffff jmp 0x102cf29020ad <+0x6d>
0x102cf2902191 151 486301 REX.W movsxlq rax,[rcx]
0x102cf2902194 154 4883c104 REX.W addq rcx,0x4
0x102cf2902198 158 48894590 REX.W movq [rbp-0x70],rax
0x102cf290219c 15c 488b45b8 REX.W movq rax,[rbp-0x48]
0x102cf29021a0 160 48894598 REX.W movq [rbp-0x68],rax
0x102cf29021a4 164 486339 REX.W movsxlq rdi,[rcx]
0x102cf29021a7 167 4883c104 REX.W addq rcx,0x4
0x102cf29021ab 16b e900000000 jmp 0x102cf29021b0 <+0x170>
0x102cf29021b0 170 3b39 cmpl rdi,[rcx]
0x102cf29021b2 172 0f8528000000 jnz 0x102cf29021e0 <+0x1a0>
0x102cf29021b8 178 4883c104 REX.W addq rcx,0x4
0x102cf29021bc 17c 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf29021c6 186 483be0 REX.W cmpq rsp,rax
0x102cf29021c9 189 0f8705000000 ja 0x102cf29021d4 <+0x194>
0x102cf29021cf 18f e85f020000 call 0x102cf2902433 <+0x3f3>
0x102cf29021d4 194 486319 REX.W movsxlq rbx,[rcx]
0x102cf29021d7 197 4883c104 REX.W addq rcx,0x4
0x102cf29021db 19b 4903d8 REX.W addq rbx,r8
0x102cf29021de 19e ffe3 jmp rbx
0x102cf29021e0 1a0 4883c7ff REX.W addq rdi,0xff
0x102cf29021e4 1a4 e968ffffff jmp 0x102cf2902151 <+0x111>
0x102cf29021e9 1a9 486301 REX.W movsxlq rax,[rcx]
0x102cf29021ec 1ac 4883c104 REX.W addq rcx,0x4
0x102cf29021f0 1b0 48894598 REX.W movq [rbp-0x68],rax
0x102cf29021f4 1b4 486301 REX.W movsxlq rax,[rcx]
0x102cf29021f7 1b7 4883c104 REX.W addq rcx,0x4
0x102cf29021fb 1bb 488945a0 REX.W movq [rbp-0x60],rax
0x102cf29021ff 1bf 486339 REX.W movsxlq rdi,[rcx]
0x102cf2902202 1c2 4883c104 REX.W addq rcx,0x4
0x102cf2902206 1c6 e900000000 jmp 0x102cf290220b <+0x1cb>
0x102cf290220b 1cb 48837d9001 REX.W cmpq [rbp-0x70],0x1
0x102cf2902210 1d0 0f8cf9010000 jl 0x102cf290240f <+0x3cf>
0x102cf2902216 1d6 83ff00 cmpl rdi,0x0
0x102cf2902219 1d9 0f8d24000000 jge 0x102cf2902243 <+0x203>
0x102cf290221f 1df 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf2902229 1e9 483be0 REX.W cmpq rsp,rax
0x102cf290222c 1ec 0f8705000000 ja 0x102cf2902237 <+0x1f7>
0x102cf2902232 1f2 e8fc010000 call 0x102cf2902433 <+0x3f3>
0x102cf2902237 1f7 486319 REX.W movsxlq rbx,[rcx]
0x102cf290223a 1fa 4883c104 REX.W addq rcx,0x4
0x102cf290223e 1fe 4903d8 REX.W addq rbx,r8
0x102cf2902241 201 ffe3 jmp rbx
0x102cf2902243 203 48897da8 REX.W movq [rbp-0x58],rdi
0x102cf2902247 207 4883e904 REX.W subq rcx,0x4
0x102cf290224b 20b c7016d020000 movl [rcx],0x26d
0x102cf2902251 211 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf290225b 21b 483bc8 REX.W cmpq rcx,rax
0x102cf290225e 21e 0f8705000000 ja 0x102cf2902269 <+0x229>
0x102cf2902264 224 e83e020000 call 0x102cf29024a7 <+0x467>
0x102cf2902269 229 e957010000 jmp 0x102cf29023c5 <+0x385>
0x102cf290226e 22e 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf2902278 238 483be0 REX.W cmpq rsp,rax
0x102cf290227b 23b 0f8705000000 ja 0x102cf2902286 <+0x246>
0x102cf2902281 241 e8ad010000 call 0x102cf2902433 <+0x3f3>
0x102cf2902286 246 486319 REX.W movsxlq rbx,[rcx]
0x102cf2902289 249 4883c104 REX.W addq rcx,0x4
0x102cf290228d 24d 4903d8 REX.W addq rbx,r8
0x102cf2902290 250 ffe3 jmp rbx
0x102cf2902292 252 486301 REX.W movsxlq rax,[rcx]
0x102cf2902295 255 4883c104 REX.W addq rcx,0x4
0x102cf2902299 259 48894590 REX.W movq [rbp-0x70],rax
0x102cf290229d 25d 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf29022a7 267 483be0 REX.W cmpq rsp,rax
0x102cf29022aa 26a 0f8705000000 ja 0x102cf29022b5 <+0x275>
0x102cf29022b0 270 e87e010000 call 0x102cf2902433 <+0x3f3>
0x102cf29022b5 275 486319 REX.W movsxlq rbx,[rcx]
0x102cf29022b8 278 4883c104 REX.W addq rcx,0x4
0x102cf29022bc 27c 4903d8 REX.W addq rbx,r8
0x102cf29022bf 27f ffe3 jmp rbx
0x102cf29022c1 281 33c0 xorl rax,rax
0x102cf29022c3 283 e93e010000 jmp 0x102cf2902406 <+0x3c6>
0x102cf29022c8 288 55 push rbp
0x102cf29022c9 289 4889e5 REX.W movq rbp,rsp
0x102cf29022cc 28c 57 push rdi
0x102cf29022cd 28d 56 push rsi
0x102cf29022ce 28e 52 push rdx
0x102cf29022cf 28f 51 push rcx
0x102cf29022d0 290 4150 push r8
0x102cf29022d2 292 4151 push r9
0x102cf29022d4 294 53 push rbx
0x102cf29022d5 295 6a00 push 0x0
0x102cf29022d7 297 6a00 push 0x0
0x102cf29022d9 299 4889e1 REX.W movq rcx,rsp
0x102cf29022dc 29c 49bac81e011001000000 REX.W movq r10,0x110011ec8
0x102cf29022e6 2a6 492b0a REX.W subq rcx,[r10]
0x102cf29022e9 2a9 0f8616000000 jna 0x102cf2902305 <+0x2c5>
0x102cf29022ef 2af 4883f928 REX.W cmpq rcx,0x28
0x102cf29022f3 2b3 0f8378000000 jnc 0x102cf2902371 <+0x331>
0x102cf29022f9 2b9 48c7c0ffffffff REX.W movq rax,0xffffffff
0x102cf2902300 2c0 e901010000 jmp 0x102cf2902406 <+0x3c6>
0x102cf2902305 2c5 49b8012090f22c100000 REX.W movq r8,0x102cf2902001 ;; object: 0x102cf2902001 <Code REGEXP>
0x102cf290230f 2cf 4989e2 REX.W movq r10,rsp
0x102cf2902312 2d2 4883ec08 REX.W subq rsp,0x8
0x102cf2902316 2d6 4883e4f0 REX.W andq rsp,0xf0
0x102cf290231a 2da 4c891424 REX.W movq [rsp],r10
0x102cf290231e 2de 488bd5 REX.W movq rdx,rbp
0x102cf2902321 2e1 498bf0 REX.W movq rsi,r8
0x102cf2902324 2e4 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x102cf2902329 2e9 48b81068830001000000 REX.W movq rax,0x100836810
0x102cf2902333 2f3 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf290233a 2fa 49ba7811011001000000 REX.W movq r10,0x110011178
0x102cf2902344 304 4d8912 REX.W movq [r10],r10
0x102cf2902347 307 49ba7011011001000000 REX.W movq r10,0x110011170
0x102cf2902351 311 49892a REX.W movq [r10],rbp
0x102cf2902354 314 ffd0 call rax
0x102cf2902356 316 4c8b15ecffffff REX.W movq r10,[rip+0xffffffec]
0x102cf290235d 31d 49c70200000000 REX.W movq [r10],0x0
0x102cf2902364 324 488b2424 REX.W movq rsp,[rsp]
0x102cf2902368 328 4885c0 REX.W testq rax,rax
0x102cf290236b 32b 0f8595000000 jnz 0x102cf2902406 <+0x3c6>
0x102cf2902371 331 4883ec28 REX.W subq rsp,0x28
0x102cf2902375 335 488b75e0 REX.W movq rsi,[rbp-0x20]
0x102cf2902379 339 488b7de8 REX.W movq rdi,[rbp-0x18]
0x102cf290237d 33d 482bfe REX.W subq rdi,rsi
0x102cf2902380 340 488b5df0 REX.W movq rbx,[rbp-0x10]
0x102cf2902384 344 48f7db REX.W negq rbx
0x102cf2902387 347 488d441fff REX.W leaq rax,[rdi+rbx*1-0x1]
0x102cf290238c 34c 488945b8 REX.W movq [rbp-0x48],rax
0x102cf2902390 350 49b8012090f22c100000 REX.W movq r8,0x102cf2902001 ;; object: 0x102cf2902001 <Code REGEXP>
0x102cf290239a 35a 837df000 cmpl [rbp-0x10],0x0
0x102cf290239e 35e 7507 jnz 0x102cf29023a7 <+0x367>
0x102cf29023a0 360 ba0a000000 movl rdx,0xa
0x102cf29023a5 365 eb05 jmp 0x102cf29023ac <+0x36c>
0x102cf29023a7 367 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x102cf29023ac 36c 488945b0 REX.W movq [rbp-0x50],rax
0x102cf29023b0 370 488945a8 REX.W movq [rbp-0x58],rax
0x102cf29023b4 374 488945a0 REX.W movq [rbp-0x60],rax
0x102cf29023b8 378 48894598 REX.W movq [rbp-0x68],rax
0x102cf29023bc 37c 488b4d10 REX.W movq rcx,[rbp+0x10]
0x102cf29023c0 380 e980fcffff jmp 0x102cf2902045 <+0x5>
0x102cf29023c5 385 488b55f0 REX.W movq rdx,[rbp-0x10]
0x102cf29023c9 389 488b5dd8 REX.W movq rbx,[rbp-0x28]
0x102cf29023cd 38d 488b4de0 REX.W movq rcx,[rbp-0x20]
0x102cf29023d1 391 482b4de8 REX.W subq rcx,[rbp-0x18]
0x102cf29023d5 395 4803ca REX.W addq rcx,rdx
0x102cf29023d8 398 488b45b0 REX.W movq rax,[rbp-0x50]
0x102cf29023dc 39c 4803c1 REX.W addq rax,rcx
0x102cf29023df 39f 8903 movl [rbx],rax
0x102cf29023e1 3a1 488b45a8 REX.W movq rax,[rbp-0x58]
0x102cf29023e5 3a5 4803c1 REX.W addq rax,rcx
0x102cf29023e8 3a8 894304 movl [rbx+0x4],rax
0x102cf29023eb 3ab 488b45a0 REX.W movq rax,[rbp-0x60]
0x102cf29023ef 3af 4803c1 REX.W addq rax,rcx
0x102cf29023f2 3b2 894308 movl [rbx+0x8],rax
0x102cf29023f5 3b5 488b4598 REX.W movq rax,[rbp-0x68]
0x102cf29023f9 3b9 4803c1 REX.W addq rax,rcx
0x102cf29023fc 3bc 89430c movl [rbx+0xc],rax
0x102cf29023ff 3bf 48c7c001000000 REX.W movq rax,0x1
0x102cf2902406 3c6 488b5dc8 REX.W movq rbx,[rbp-0x38]
0x102cf290240a 3ca 488be5 REX.W movq rsp,rbp
0x102cf290240d 3cd 5d pop rbp
0x102cf290240e 3ce c3 retl
0x102cf290240f 3cf 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf2902419 3d9 483be0 REX.W cmpq rsp,rax
0x102cf290241c 3dc 0f8705000000 ja 0x102cf2902427 <+0x3e7>
0x102cf2902422 3e2 e80c000000 call 0x102cf2902433 <+0x3f3>
0x102cf2902427 3e7 486319 REX.W movsxlq rbx,[rcx]
0x102cf290242a 3ea 4883c104 REX.W addq rcx,0x4
0x102cf290242e 3ee 4903d8 REX.W addq rbx,r8
0x102cf2902431 3f1 ffe3 jmp rbx
0x102cf2902433 3f3 4c290424 REX.W subq [rsp],r8
0x102cf2902437 3f7 51 push rcx
0x102cf2902438 3f8 57 push rdi
0x102cf2902439 3f9 4989e2 REX.W movq r10,rsp
0x102cf290243c 3fc 4883ec08 REX.W subq rsp,0x8
0x102cf2902440 400 4883e4f0 REX.W andq rsp,0xf0
0x102cf2902444 404 4c891424 REX.W movq [rsp],r10
0x102cf2902448 408 488bd5 REX.W movq rdx,rbp
0x102cf290244b 40b 498bf0 REX.W movq rsi,r8
0x102cf290244e 40e 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x102cf2902453 413 488b05d1feffff REX.W movq rax,[rip+0xfffffed1]
0x102cf290245a 41a 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf2902461 421 4c8b15d4feffff REX.W movq r10,[rip+0xfffffed4]
0x102cf2902468 428 4d8912 REX.W movq [r10],r10
0x102cf290246b 42b 4c8b15d7feffff REX.W movq r10,[rip+0xfffffed7]
0x102cf2902472 432 49892a REX.W movq [r10],rbp
0x102cf2902475 435 ffd0 call rax
0x102cf2902477 437 4c8b15cbfeffff REX.W movq r10,[rip+0xfffffecb]
0x102cf290247e 43e 49c70200000000 REX.W movq [r10],0x0
0x102cf2902485 445 488b2424 REX.W movq rsp,[rsp]
0x102cf2902489 449 4885c0 REX.W testq rax,rax
0x102cf290248c 44c 0f8574ffffff jnz 0x102cf2902406 <+0x3c6>
0x102cf2902492 452 49b8012090f22c100000 REX.W movq r8,0x102cf2902001 ;; object: 0x102cf2902001 <Code REGEXP>
0x102cf290249c 45c 5f pop rdi
0x102cf290249d 45d 59 pop rcx
0x102cf290249e 45e 488b75e0 REX.W movq rsi,[rbp-0x20]
0x102cf29024a2 462 4c010424 REX.W addq [rsp],r8
0x102cf29024a6 466 c3 retl
0x102cf29024a7 467 4c290424 REX.W subq [rsp],r8
0x102cf29024ab 46b 56 push rsi
0x102cf29024ac 46c 57 push rdi
0x102cf29024ad 46d 4989e2 REX.W movq r10,rsp
0x102cf29024b0 470 4883ec08 REX.W subq rsp,0x8
0x102cf29024b4 474 4883e4f0 REX.W andq rsp,0xf0
0x102cf29024b8 478 4c891424 REX.W movq [rsp],r10
0x102cf29024bc 47c 488bf9 REX.W movq rdi,rcx
0x102cf29024bf 47f 488d7510 REX.W leaq rsi,[rbp+0x10]
0x102cf29024c3 483 48ba0080001001000000 REX.W movq rdx,0x110008000
0x102cf29024cd 48d 48b8e0435c0001000000 REX.W movq rax,0x1005c43e0
0x102cf29024d7 497 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf29024de 49e 4c8b1557feffff REX.W movq r10,[rip+0xfffffe57]
0x102cf29024e5 4a5 4d8912 REX.W movq [r10],r10
0x102cf29024e8 4a8 4c8b155afeffff REX.W movq r10,[rip+0xfffffe5a]
0x102cf29024ef 4af 49892a REX.W movq [r10],rbp
0x102cf29024f2 4b2 ffd0 call rax
0x102cf29024f4 4b4 4c8b154efeffff REX.W movq r10,[rip+0xfffffe4e]
0x102cf29024fb 4bb 49c70200000000 REX.W movq [r10],0x0
0x102cf2902502 4c2 488b2424 REX.W movq rsp,[rsp]
0x102cf2902506 4c6 4885c0 REX.W testq rax,rax
0x102cf2902509 4c9 0f8414000000 jz 0x102cf2902523 <+0x4e3>
0x102cf290250f 4cf 488bc8 REX.W movq rcx,rax
0x102cf2902512 4d2 49b8012090f22c100000 REX.W movq r8,0x102cf2902001 ;; object: 0x102cf2902001 <Code REGEXP>
0x102cf290251c 4dc 5f pop rdi
0x102cf290251d 4dd 5e pop rsi
0x102cf290251e 4de 4c010424 REX.W addq [rsp],r8
0x102cf2902522 4e2 c3 retl
0x102cf2902523 4e3 48c7c0ffffffff REX.W movq rax,0xffffffff
0x102cf290252a 4ea e9d7feffff jmp 0x102cf2902406 <+0x3c6>

RelocInfo (size = 12)
0x102cf2902307 full embedded object (0x102cf2902001 <Code REGEXP>)
0x102cf2902392 full embedded object (0x102cf2902001 <Code REGEXP>)
0x102cf2902494 full embedded object (0x102cf2902001 <Code REGEXP>)
0x102cf2902514 full embedded object (0x102cf2902001 <Code REGEXP>)

kind = REGEXP
name = ^$
compiler = unknown
address = 0x7ffeefbfdf00

Instructions (size = 775)
0x102cf2902580 0 e9b7000000 jmp 0x102cf290263c <+0xbc>
0x102cf2902585 5 4883e904 REX.W subq rcx,0x4
0x102cf2902589 9 c701f4000000 movl [rcx],0xf4
0x102cf290258f f 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf2902599 19 483bc8 REX.W cmpq rcx,rax
0x102cf290259c 1c 0f8705000000 ja 0x102cf29025a7 <+0x27>
0x102cf29025a2 22 e858020000 call 0x102cf29027ff <+0x27f>
0x102cf29025a7 27 488d47ff REX.W leaq rax,[rdi-0x1]
0x102cf29025ab 2b 483b45b8 REX.W cmpq rax,[rbp-0x48]
0x102cf29025af 2f 0f85b2010000 jnz 0x102cf2902767 <+0x1e7>
0x102cf29025b5 35 83ff00 cmpl rdi,0x0
0x102cf29025b8 38 0f8d24000000 jge 0x102cf29025e2 <+0x62>
0x102cf29025be 3e 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf29025c8 48 483be0 REX.W cmpq rsp,rax
0x102cf29025cb 4b 0f8705000000 ja 0x102cf29025d6 <+0x56>
0x102cf29025d1 51 e8b5010000 call 0x102cf290278b <+0x20b>
0x102cf29025d6 56 486319 REX.W movsxlq rbx,[rcx]
0x102cf29025d9 59 4883c104 REX.W addq rcx,0x4
0x102cf29025dd 5d 4903d8 REX.W addq rbx,r8
0x102cf29025e0 60 ffe3 jmp rbx
0x102cf29025e2 62 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf29025e6 66 48897da8 REX.W movq [rbp-0x58],rdi
0x102cf29025ea 6a 4883e904 REX.W subq rcx,0x4
0x102cf29025ee 6e c701d0000000 movl [rcx],0xd0
0x102cf29025f4 74 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf29025fe 7e 483bc8 REX.W cmpq rcx,rax
0x102cf2902601 81 0f8705000000 ja 0x102cf290260c <+0x8c>
0x102cf2902607 87 e8f3010000 call 0x102cf29027ff <+0x27f>
0x102cf290260c 8c e920010000 jmp 0x102cf2902731 <+0x1b1>
0x102cf2902611 91 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf290261b 9b 483be0 REX.W cmpq rsp,rax
0x102cf290261e 9e 0f8705000000 ja 0x102cf2902629 <+0xa9>
0x102cf2902624 a4 e862010000 call 0x102cf290278b <+0x20b>
0x102cf2902629 a9 486319 REX.W movsxlq rbx,[rcx]
0x102cf290262c ac 4883c104 REX.W addq rcx,0x4
0x102cf2902630 b0 4903d8 REX.W addq rbx,r8
0x102cf2902633 b3 ffe3 jmp rbx
0x102cf2902635 b5 33c0 xorl rax,rax
0x102cf2902637 b7 e922010000 jmp 0x102cf290275e <+0x1de>
0x102cf290263c bc 55 push rbp
0x102cf290263d bd 4889e5 REX.W movq rbp,rsp
0x102cf2902640 c0 57 push rdi
0x102cf2902641 c1 56 push rsi
0x102cf2902642 c2 52 push rdx
0x102cf2902643 c3 51 push rcx
0x102cf2902644 c4 4150 push r8
0x102cf2902646 c6 4151 push r9
0x102cf2902648 c8 53 push rbx
0x102cf2902649 c9 6a00 push 0x0
0x102cf290264b cb 6a00 push 0x0
0x102cf290264d cd 4889e1 REX.W movq rcx,rsp
0x102cf2902650 d0 49bac81e011001000000 REX.W movq r10,0x110011ec8
0x102cf290265a da 492b0a REX.W subq rcx,[r10]
0x102cf290265d dd 0f8616000000 jna 0x102cf2902679 <+0xf9>
0x102cf2902663 e3 4883f910 REX.W cmpq rcx,0x10
0x102cf2902667 e7 0f8378000000 jnc 0x102cf29026e5 <+0x165>
0x102cf290266d ed 48c7c0ffffffff REX.W movq rax,0xffffffff
0x102cf2902674 f4 e9e5000000 jmp 0x102cf290275e <+0x1de>
0x102cf2902679 f9 49b8412590f22c100000 REX.W movq r8,0x102cf2902541 ;; object: 0x102cf2902541 <Code REGEXP>
0x102cf2902683 103 4989e2 REX.W movq r10,rsp
0x102cf2902686 106 4883ec08 REX.W subq rsp,0x8
0x102cf290268a 10a 4883e4f0 REX.W andq rsp,0xf0
0x102cf290268e 10e 4c891424 REX.W movq [rsp],r10
0x102cf2902692 112 488bd5 REX.W movq rdx,rbp
0x102cf2902695 115 498bf0 REX.W movq rsi,r8
0x102cf2902698 118 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x102cf290269d 11d 48b81068830001000000 REX.W movq rax,0x100836810
0x102cf29026a7 127 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf29026ae 12e 49ba7811011001000000 REX.W movq r10,0x110011178
0x102cf29026b8 138 4d8912 REX.W movq [r10],r10
0x102cf29026bb 13b 49ba7011011001000000 REX.W movq r10,0x110011170
0x102cf29026c5 145 49892a REX.W movq [r10],rbp
0x102cf29026c8 148 ffd0 call rax
0x102cf29026ca 14a 4c8b15ecffffff REX.W movq r10,[rip+0xffffffec]
0x102cf29026d1 151 49c70200000000 REX.W movq [r10],0x0
0x102cf29026d8 158 488b2424 REX.W movq rsp,[rsp]
0x102cf29026dc 15c 4885c0 REX.W testq rax,rax
0x102cf29026df 15f 0f8579000000 jnz 0x102cf290275e <+0x1de>
0x102cf29026e5 165 4883ec10 REX.W subq rsp,0x10
0x102cf29026e9 169 488b75e0 REX.W movq rsi,[rbp-0x20]
0x102cf29026ed 16d 488b7de8 REX.W movq rdi,[rbp-0x18]
0x102cf29026f1 171 482bfe REX.W subq rdi,rsi
0x102cf29026f4 174 488b5df0 REX.W movq rbx,[rbp-0x10]
0x102cf29026f8 178 48f7db REX.W negq rbx
0x102cf29026fb 17b 488d441fff REX.W leaq rax,[rdi+rbx*1-0x1]
0x102cf2902700 180 488945b8 REX.W movq [rbp-0x48],rax
0x102cf2902704 184 49b8412590f22c100000 REX.W movq r8,0x102cf2902541 ;; object: 0x102cf2902541 <Code REGEXP>
0x102cf290270e 18e 837df000 cmpl [rbp-0x10],0x0
0x102cf2902712 192 7507 jnz 0x102cf290271b <+0x19b>
0x102cf2902714 194 ba0a000000 movl rdx,0xa
0x102cf2902719 199 eb05 jmp 0x102cf2902720 <+0x1a0>
0x102cf290271b 19b 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x102cf2902720 1a0 488945b0 REX.W movq [rbp-0x50],rax
0x102cf2902724 1a4 488945a8 REX.W movq [rbp-0x58],rax
0x102cf2902728 1a8 488b4d10 REX.W movq rcx,[rbp+0x10]
0x102cf290272c 1ac e954feffff jmp 0x102cf2902585 <+0x5>
0x102cf2902731 1b1 488b55f0 REX.W movq rdx,[rbp-0x10]
0x102cf2902735 1b5 488b5dd8 REX.W movq rbx,[rbp-0x28]
0x102cf2902739 1b9 488b4de0 REX.W movq rcx,[rbp-0x20]
0x102cf290273d 1bd 482b4de8 REX.W subq rcx,[rbp-0x18]
0x102cf2902741 1c1 4803ca REX.W addq rcx,rdx
0x102cf2902744 1c4 488b45b0 REX.W movq rax,[rbp-0x50]
0x102cf2902748 1c8 4803c1 REX.W addq rax,rcx
0x102cf290274b 1cb 8903 movl [rbx],rax
0x102cf290274d 1cd 488b45a8 REX.W movq rax,[rbp-0x58]
0x102cf2902751 1d1 4803c1 REX.W addq rax,rcx
0x102cf2902754 1d4 894304 movl [rbx+0x4],rax
0x102cf2902757 1d7 48c7c001000000 REX.W movq rax,0x1
0x102cf290275e 1de 488b5dc8 REX.W movq rbx,[rbp-0x38]
0x102cf2902762 1e2 488be5 REX.W movq rsp,rbp
0x102cf2902765 1e5 5d pop rbp
0x102cf2902766 1e6 c3 retl
0x102cf2902767 1e7 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf2902771 1f1 483be0 REX.W cmpq rsp,rax
0x102cf2902774 1f4 0f8705000000 ja 0x102cf290277f <+0x1ff>
0x102cf290277a 1fa e80c000000 call 0x102cf290278b <+0x20b>
0x102cf290277f 1ff 486319 REX.W movsxlq rbx,[rcx]
0x102cf2902782 202 4883c104 REX.W addq rcx,0x4
0x102cf2902786 206 4903d8 REX.W addq rbx,r8
0x102cf2902789 209 ffe3 jmp rbx
0x102cf290278b 20b 4c290424 REX.W subq [rsp],r8
0x102cf290278f 20f 51 push rcx
0x102cf2902790 210 57 push rdi
0x102cf2902791 211 4989e2 REX.W movq r10,rsp
0x102cf2902794 214 4883ec08 REX.W subq rsp,0x8
0x102cf2902798 218 4883e4f0 REX.W andq rsp,0xf0
0x102cf290279c 21c 4c891424 REX.W movq [rsp],r10
0x102cf29027a0 220 488bd5 REX.W movq rdx,rbp
0x102cf29027a3 223 498bf0 REX.W movq rsi,r8
0x102cf29027a6 226 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x102cf29027ab 22b 488b05edfeffff REX.W movq rax,[rip+0xfffffeed]
0x102cf29027b2 232 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf29027b9 239 4c8b15f0feffff REX.W movq r10,[rip+0xfffffef0]
0x102cf29027c0 240 4d8912 REX.W movq [r10],r10
0x102cf29027c3 243 4c8b15f3feffff REX.W movq r10,[rip+0xfffffef3]
0x102cf29027ca 24a 49892a REX.W movq [r10],rbp
0x102cf29027cd 24d ffd0 call rax
0x102cf29027cf 24f 4c8b15e7feffff REX.W movq r10,[rip+0xfffffee7]
0x102cf29027d6 256 49c70200000000 REX.W movq [r10],0x0
0x102cf29027dd 25d 488b2424 REX.W movq rsp,[rsp]
0x102cf29027e1 261 4885c0 REX.W testq rax,rax
0x102cf29027e4 264 0f8574ffffff jnz 0x102cf290275e <+0x1de>
0x102cf29027ea 26a 49b8412590f22c100000 REX.W movq r8,0x102cf2902541 ;; object: 0x102cf2902541 <Code REGEXP>
0x102cf29027f4 274 5f pop rdi
0x102cf29027f5 275 59 pop rcx
0x102cf29027f6 276 488b75e0 REX.W movq rsi,[rbp-0x20]
0x102cf29027fa 27a 4c010424 REX.W addq [rsp],r8
0x102cf29027fe 27e c3 retl
0x102cf29027ff 27f 4c290424 REX.W subq [rsp],r8
0x102cf2902803 283 56 push rsi
0x102cf2902804 284 57 push rdi
0x102cf2902805 285 4989e2 REX.W movq r10,rsp
0x102cf2902808 288 4883ec08 REX.W subq rsp,0x8
0x102cf290280c 28c 4883e4f0 REX.W andq rsp,0xf0
0x102cf2902810 290 4c891424 REX.W movq [rsp],r10
0x102cf2902814 294 488bf9 REX.W movq rdi,rcx
0x102cf2902817 297 488d7510 REX.W leaq rsi,[rbp+0x10]
0x102cf290281b 29b 48ba0080001001000000 REX.W movq rdx,0x110008000
0x102cf2902825 2a5 48b8e0435c0001000000 REX.W movq rax,0x1005c43e0
0x102cf290282f 2af 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf2902836 2b6 4c8b1573feffff REX.W movq r10,[rip+0xfffffe73]
0x102cf290283d 2bd 4d8912 REX.W movq [r10],r10
0x102cf2902840 2c0 4c8b1576feffff REX.W movq r10,[rip+0xfffffe76]
0x102cf2902847 2c7 49892a REX.W movq [r10],rbp
0x102cf290284a 2ca ffd0 call rax
0x102cf290284c 2cc 4c8b156afeffff REX.W movq r10,[rip+0xfffffe6a]
0x102cf2902853 2d3 49c70200000000 REX.W movq [r10],0x0
0x102cf290285a 2da 488b2424 REX.W movq rsp,[rsp]
0x102cf290285e 2de 4885c0 REX.W testq rax,rax
0x102cf2902861 2e1 0f8414000000 jz 0x102cf290287b <+0x2fb>
0x102cf2902867 2e7 488bc8 REX.W movq rcx,rax
0x102cf290286a 2ea 49b8412590f22c100000 REX.W movq r8,0x102cf2902541 ;; object: 0x102cf2902541 <Code REGEXP>
0x102cf2902874 2f4 5f pop rdi
0x102cf2902875 2f5 5e pop rsi
0x102cf2902876 2f6 4c010424 REX.W addq [rsp],r8
0x102cf290287a 2fa c3 retl
0x102cf290287b 2fb 48c7c0ffffffff REX.W movq rax,0xffffffff
0x102cf2902882 302 e9d7feffff jmp 0x102cf290275e <+0x1de>

RelocInfo (size = 12)
0x102cf290267b full embedded object (0x102cf2902541 <Code REGEXP>)
0x102cf2902706 full embedded object (0x102cf2902541 <Code REGEXP>)
0x102cf29027ec full embedded object (0x102cf2902541 <Code REGEXP>)
0x102cf290286c full embedded object (0x102cf2902541 <Code REGEXP>)

kind = REGEXP
name = (?:^|\/)\.?\.$
compiler = unknown
address = 0x7ffeefbfdfd0

Instructions (size = 1506)
0x102cf29028e0 0 e992030000 jmp 0x102cf2902c77 <+0x397>
0x102cf29028e5 5 4883fffd REX.W cmpq rdi,0xfd
0x102cf29028e9 9 7d0c jge 0x102cf29028f7 <+0x17>
0x102cf29028eb b 48c7c7fdffffff REX.W movq rdi,0xfffffffd
0x102cf29028f2 12 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x102cf29028f7 17 4883e904 REX.W subq rcx,0x4
0x102cf29028fb 1b c701cf030000 movl [rcx],0x3cf
0x102cf2902901 21 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf290290b 2b 483bc8 REX.W cmpq rcx,rax
0x102cf290290e 2e 0f8705000000 ja 0x102cf2902919 <+0x39>
0x102cf2902914 34 e821050000 call 0x102cf2902e3a <+0x55a>
0x102cf2902919 39 83ff00 cmpl rdi,0x0
0x102cf290291c 3c 0f8d80040000 jge 0x102cf2902da2 <+0x4c2>
0x102cf2902922 42 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x102cf2902926 46 b8fe000000 movl rax,0xfe
0x102cf290292b 4b 4823c2 REX.W andq rax,rdx
0x102cf290292e 4e 83f82e cmpl rax,0x2e
0x102cf2902931 51 0f8441010000 jz 0x102cf2902a78 <+0x198>
0x102cf2902937 57 4883c701 REX.W addq rdi,0x1
0x102cf290293b 5b 83ff00 cmpl rdi,0x0
0x102cf290293e 5e 0f8d26000000 jge 0x102cf290296a <+0x8a>
0x102cf2902944 64 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x102cf2902948 68 48b8d1c6a8eb4d160000 REX.W movq rax,0x164deba8c6d1 ;; object: 0x164deba8c6d1 <ByteArray[128]>
0x102cf2902952 72 488bda REX.W movq rbx,rdx
0x102cf2902955 75 4883e37f REX.W andq rbx,0x7f
0x102cf2902959 79 807c180f00 cmpb [rax+rbx*1+0xf],0x0
0x102cf290295e 7e 0f8506000000 jnz 0x102cf290296a <+0x8a>
0x102cf2902964 84 4883c701 REX.W addq rdi,0x1
0x102cf2902968 88 ebd1 jmp 0x102cf290293b <+0x5b>
0x102cf290296a 8a 83ff00 cmpl rdi,0x0
0x102cf290296d 8d 0f8d2f040000 jge 0x102cf2902da2 <+0x4c2>
0x102cf2902973 93 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x102cf2902977 97 83fa2f cmpl rdx,0x2f
0x102cf290297a 9a 0f8406000000 jz 0x102cf2902986 <+0xa6>
0x102cf2902980 a0 4883c701 REX.W addq rdi,0x1
0x102cf2902984 a4 ebb5 jmp 0x102cf290293b <+0x5b>
0x102cf2902986 a6 83ffff cmpl rdi,0xff
0x102cf2902989 a9 7df5 jge 0x102cf2902980 <+0xa0>
0x102cf290298b ab 0fb7143e movzxwl rdx,[rsi+rdi*1]
0x102cf290298f af 81fa2f2e0000 cmpl rdx,0x2e2f
0x102cf2902995 b5 75e9 jnz 0x102cf2902980 <+0xa0>
0x102cf2902997 b7 83ffff cmpl rdi,0xff
0x102cf290299a ba 7de4 jge 0x102cf2902980 <+0xa0>
0x102cf290299c bc 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x102cf29029a1 c1 83fa2e cmpl rdx,0x2e
0x102cf29029a4 c4 0f8456000000 jz 0x102cf2902a00 <+0x120>
0x102cf29029aa ca 83fa2e cmpl rdx,0x2e
0x102cf29029ad cd 75d1 jnz 0x102cf2902980 <+0xa0>
0x102cf29029af cf 83fffe cmpl rdi,0xfe
0x102cf29029b2 d2 0f8d02000000 jge 0x102cf29029ba <+0xda>
0x102cf29029b8 d8 ebc6 jmp 0x102cf2902980 <+0xa0>
0x102cf29029ba da 4883e904 REX.W subq rcx,0x4
0x102cf29029be de 8939 movl [rcx],rdi
0x102cf29029c0 e0 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf29029c4 e4 488d4702 REX.W leaq rax,[rdi+0x2]
0x102cf29029c8 e8 488945a8 REX.W movq [rbp-0x58],rax
0x102cf29029cc ec 4883c702 REX.W addq rdi,0x2
0x102cf29029d0 f0 4883e904 REX.W subq rcx,0x4
0x102cf29029d4 f4 c70156010000 movl [rcx],0x156
0x102cf29029da fa 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf29029e4 104 483bc8 REX.W cmpq rcx,rax
0x102cf29029e7 107 0f8705000000 ja 0x102cf29029f2 <+0x112>
0x102cf29029ed 10d e848040000 call 0x102cf2902e3a <+0x55a>
0x102cf29029f2 112 e975030000 jmp 0x102cf2902d6c <+0x48c>
0x102cf29029f7 117 486339 REX.W movsxlq rdi,[rcx]
0x102cf29029fa 11a 4883c104 REX.W addq rcx,0x4
0x102cf29029fe 11e eb80 jmp 0x102cf2902980 <+0xa0>
0x102cf2902a00 120 83fffe cmpl rdi,0xfe
0x102cf2902a03 123 0f8d65000000 jge 0x102cf2902a6e <+0x18e>
0x102cf2902a09 129 0fb6543e02 movzxbl rdx,[rsi+rdi*1+0x2]
0x102cf2902a0e 12e 83fa2e cmpl rdx,0x2e
0x102cf2902a11 131 0f8557000000 jnz 0x102cf2902a6e <+0x18e>
0x102cf2902a17 137 83fffd cmpl rdi,0xfd
0x102cf2902a1a 13a 0f8d05000000 jge 0x102cf2902a25 <+0x145>
0x102cf2902a20 140 e949000000 jmp 0x102cf2902a6e <+0x18e>
0x102cf2902a25 145 4883e904 REX.W subq rcx,0x4
0x102cf2902a29 149 8939 movl [rcx],rdi
0x102cf2902a2b 14b 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf2902a2f 14f 488d4703 REX.W leaq rax,[rdi+0x3]
0x102cf2902a33 153 488945a8 REX.W movq [rbp-0x58],rax
0x102cf2902a37 157 4883c703 REX.W addq rdi,0x3
0x102cf2902a3b 15b 4883e904 REX.W subq rcx,0x4
0x102cf2902a3f 15f c701c1010000 movl [rcx],0x1c1
0x102cf2902a45 165 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf2902a4f 16f 483bc8 REX.W cmpq rcx,rax
0x102cf2902a52 172 0f8705000000 ja 0x102cf2902a5d <+0x17d>
0x102cf2902a58 178 e8dd030000 call 0x102cf2902e3a <+0x55a>
0x102cf2902a5d 17d e90a030000 jmp 0x102cf2902d6c <+0x48c>
0x102cf2902a62 182 486339 REX.W movsxlq rdi,[rcx]
0x102cf2902a65 185 4883c104 REX.W addq rcx,0x4
0x102cf2902a69 189 e900000000 jmp 0x102cf2902a6e <+0x18e>
0x102cf2902a6e 18e 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x102cf2902a73 193 e932ffffff jmp 0x102cf29029aa <+0xca>
0x102cf2902a78 198 83fa2e cmpl rdx,0x2e
0x102cf2902a7b 19b 0f84f8000000 jz 0x102cf2902b79 <+0x299>
0x102cf2902a81 1a1 83fa2f cmpl rdx,0x2f
0x102cf2902a84 1a4 0f85adfeffff jnz 0x102cf2902937 <+0x57>
0x102cf2902a8a 1aa 83ffff cmpl rdi,0xff
0x102cf2902a8d 1ad 0f8da4feffff jge 0x102cf2902937 <+0x57>
0x102cf2902a93 1b3 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x102cf2902a98 1b8 83fa2e cmpl rdx,0x2e
0x102cf2902a9b 1bb 0f8460000000 jz 0x102cf2902b01 <+0x221>
0x102cf2902aa1 1c1 83fa2e cmpl rdx,0x2e
0x102cf2902aa4 1c4 0f858dfeffff jnz 0x102cf2902937 <+0x57>
0x102cf2902aaa 1ca 83fffe cmpl rdi,0xfe
0x102cf2902aad 1cd 0f8d05000000 jge 0x102cf2902ab8 <+0x1d8>
0x102cf2902ab3 1d3 e97ffeffff jmp 0x102cf2902937 <+0x57>
0x102cf2902ab8 1d8 4883e904 REX.W subq rcx,0x4
0x102cf2902abc 1dc 8939 movl [rcx],rdi
0x102cf2902abe 1de 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf2902ac2 1e2 488d4702 REX.W leaq rax,[rdi+0x2]
0x102cf2902ac6 1e6 488945a8 REX.W movq [rbp-0x58],rax
0x102cf2902aca 1ea 4883c702 REX.W addq rdi,0x2
0x102cf2902ace 1ee 4883e904 REX.W subq rcx,0x4
0x102cf2902ad2 1f2 c70154020000 movl [rcx],0x254
0x102cf2902ad8 1f8 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf2902ae2 202 483bc8 REX.W cmpq rcx,rax
0x102cf2902ae5 205 0f8705000000 ja 0x102cf2902af0 <+0x210>
0x102cf2902aeb 20b e84a030000 call 0x102cf2902e3a <+0x55a>
0x102cf2902af0 210 e977020000 jmp 0x102cf2902d6c <+0x48c>
0x102cf2902af5 215 486339 REX.W movsxlq rdi,[rcx]
0x102cf2902af8 218 4883c104 REX.W addq rcx,0x4
0x102cf2902afc 21c e936feffff jmp 0x102cf2902937 <+0x57>
0x102cf2902b01 221 83fffe cmpl rdi,0xfe
0x102cf2902b04 224 0f8d65000000 jge 0x102cf2902b6f <+0x28f>
0x102cf2902b0a 22a 0fb6543e02 movzxbl rdx,[rsi+rdi*1+0x2]
0x102cf2902b0f 22f 83fa2e cmpl rdx,0x2e
0x102cf2902b12 232 0f8557000000 jnz 0x102cf2902b6f <+0x28f>
0x102cf2902b18 238 83fffd cmpl rdi,0xfd
0x102cf2902b1b 23b 0f8d05000000 jge 0x102cf2902b26 <+0x246>
0x102cf2902b21 241 e949000000 jmp 0x102cf2902b6f <+0x28f>
0x102cf2902b26 246 4883e904 REX.W subq rcx,0x4
0x102cf2902b2a 24a 8939 movl [rcx],rdi
0x102cf2902b2c 24c 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf2902b30 250 488d4703 REX.W leaq rax,[rdi+0x3]
0x102cf2902b34 254 488945a8 REX.W movq [rbp-0x58],rax
0x102cf2902b38 258 4883c703 REX.W addq rdi,0x3
0x102cf2902b3c 25c 4883e904 REX.W subq rcx,0x4
0x102cf2902b40 260 c701c2020000 movl [rcx],0x2c2
0x102cf2902b46 266 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf2902b50 270 483bc8 REX.W cmpq rcx,rax
0x102cf2902b53 273 0f8705000000 ja 0x102cf2902b5e <+0x27e>
0x102cf2902b59 279 e8dc020000 call 0x102cf2902e3a <+0x55a>
0x102cf2902b5e 27e e909020000 jmp 0x102cf2902d6c <+0x48c>
0x102cf2902b63 283 486339 REX.W movsxlq rdi,[rcx]
0x102cf2902b66 286 4883c104 REX.W addq rcx,0x4
0x102cf2902b6a 28a e900000000 jmp 0x102cf2902b6f <+0x28f>
0x102cf2902b6f 28f 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x102cf2902b74 294 e928ffffff jmp 0x102cf2902aa1 <+0x1c1>
0x102cf2902b79 299 488d47ff REX.W leaq rax,[rdi-0x1]
0x102cf2902b7d 29d 483b45b8 REX.W cmpq rax,[rbp-0x48]
0x102cf2902b81 2a1 0f85e0000000 jnz 0x102cf2902c67 <+0x387>
0x102cf2902b87 2a7 83fa2e cmpl rdx,0x2e
0x102cf2902b8a 2aa 0f8460000000 jz 0x102cf2902bf0 <+0x310>
0x102cf2902b90 2b0 83fa2e cmpl rdx,0x2e
0x102cf2902b93 2b3 0f85ce000000 jnz 0x102cf2902c67 <+0x387>
0x102cf2902b99 2b9 83ffff cmpl rdi,0xff
0x102cf2902b9c 2bc 0f8d05000000 jge 0x102cf2902ba7 <+0x2c7>
0x102cf2902ba2 2c2 e9c0000000 jmp 0x102cf2902c67 <+0x387>
0x102cf2902ba7 2c7 4883e904 REX.W subq rcx,0x4
0x102cf2902bab 2cb 8939 movl [rcx],rdi
0x102cf2902bad 2cd 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf2902bb1 2d1 488d4701 REX.W leaq rax,[rdi+0x1]
0x102cf2902bb5 2d5 488945a8 REX.W movq [rbp-0x58],rax
0x102cf2902bb9 2d9 4883c701 REX.W addq rdi,0x1
0x102cf2902bbd 2dd 4883e904 REX.W subq rcx,0x4
0x102cf2902bc1 2e1 c70143030000 movl [rcx],0x343
0x102cf2902bc7 2e7 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf2902bd1 2f1 483bc8 REX.W cmpq rcx,rax
0x102cf2902bd4 2f4 0f8705000000 ja 0x102cf2902bdf <+0x2ff>
0x102cf2902bda 2fa e85b020000 call 0x102cf2902e3a <+0x55a>
0x102cf2902bdf 2ff e988010000 jmp 0x102cf2902d6c <+0x48c>
0x102cf2902be4 304 486339 REX.W movsxlq rdi,[rcx]
0x102cf2902be7 307 4883c104 REX.W addq rcx,0x4
0x102cf2902beb 30b e977000000 jmp 0x102cf2902c67 <+0x387>
0x102cf2902bf0 310 83ffff cmpl rdi,0xff
0x102cf2902bf3 313 0f8d65000000 jge 0x102cf2902c5e <+0x37e>
0x102cf2902bf9 319 0fb6543e01 movzxbl rdx,[rsi+rdi*1+0x1]
0x102cf2902bfe 31e 83fa2e cmpl rdx,0x2e
0x102cf2902c01 321 0f8557000000 jnz 0x102cf2902c5e <+0x37e>
0x102cf2902c07 327 83fffe cmpl rdi,0xfe
0x102cf2902c0a 32a 0f8d05000000 jge 0x102cf2902c15 <+0x335>
0x102cf2902c10 330 e949000000 jmp 0x102cf2902c5e <+0x37e>
0x102cf2902c15 335 4883e904 REX.W subq rcx,0x4
0x102cf2902c19 339 8939 movl [rcx],rdi
0x102cf2902c1b 33b 48897db0 REX.W movq [rbp-0x50],rdi
0x102cf2902c1f 33f 488d4702 REX.W leaq rax,[rdi+0x2]
0x102cf2902c23 343 488945a8 REX.W movq [rbp-0x58],rax
0x102cf2902c27 347 4883c702 REX.W addq rdi,0x2
0x102cf2902c2b 34b 4883e904 REX.W subq rcx,0x4
0x102cf2902c2f 34f c701b1030000 movl [rcx],0x3b1
0x102cf2902c35 355 48a19076b00201000000 REX.W movq rax,(0x102b07690)
0x102cf2902c3f 35f 483bc8 REX.W cmpq rcx,rax
0x102cf2902c42 362 0f8705000000 ja 0x102cf2902c4d <+0x36d>
0x102cf2902c48 368 e8ed010000 call 0x102cf2902e3a <+0x55a>
0x102cf2902c4d 36d e91a010000 jmp 0x102cf2902d6c <+0x48c>
0x102cf2902c52 372 486339 REX.W movsxlq rdi,[rcx]
0x102cf2902c55 375 4883c104 REX.W addq rcx,0x4
0x102cf2902c59 379 e900000000 jmp 0x102cf2902c5e <+0x37e>
0x102cf2902c5e 37e 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x102cf2902c62 382 e929ffffff jmp 0x102cf2902b90 <+0x2b0>
0x102cf2902c67 387 0fb6143e movzxbl rdx,[rsi+rdi*1]
0x102cf2902c6b 38b e911feffff jmp 0x102cf2902a81 <+0x1a1>
0x102cf2902c70 390 33c0 xorl rax,rax
0x102cf2902c72 392 e922010000 jmp 0x102cf2902d99 <+0x4b9>
0x102cf2902c77 397 55 push rbp
0x102cf2902c78 398 4889e5 REX.W movq rbp,rsp
0x102cf2902c7b 39b 57 push rdi
0x102cf2902c7c 39c 56 push rsi
0x102cf2902c7d 39d 52 push rdx
0x102cf2902c7e 39e 51 push rcx
0x102cf2902c7f 39f 4150 push r8
0x102cf2902c81 3a1 4151 push r9
0x102cf2902c83 3a3 53 push rbx
0x102cf2902c84 3a4 6a00 push 0x0
0x102cf2902c86 3a6 6a00 push 0x0
0x102cf2902c88 3a8 4889e1 REX.W movq rcx,rsp
0x102cf2902c8b 3ab 49bac81e011001000000 REX.W movq r10,0x110011ec8
0x102cf2902c95 3b5 492b0a REX.W subq rcx,[r10]
0x102cf2902c98 3b8 0f8616000000 jna 0x102cf2902cb4 <+0x3d4>
0x102cf2902c9e 3be 4883f910 REX.W cmpq rcx,0x10
0x102cf2902ca2 3c2 0f8378000000 jnc 0x102cf2902d20 <+0x440>
0x102cf2902ca8 3c8 48c7c0ffffffff REX.W movq rax,0xffffffff
0x102cf2902caf 3cf e9e5000000 jmp 0x102cf2902d99 <+0x4b9>
0x102cf2902cb4 3d4 49b8a12890f22c100000 REX.W movq r8,0x102cf29028a1 ;; object: 0x102cf29028a1 <Code REGEXP>
0x102cf2902cbe 3de 4989e2 REX.W movq r10,rsp
0x102cf2902cc1 3e1 4883ec08 REX.W subq rsp,0x8
0x102cf2902cc5 3e5 4883e4f0 REX.W andq rsp,0xf0
0x102cf2902cc9 3e9 4c891424 REX.W movq [rsp],r10
0x102cf2902ccd 3ed 488bd5 REX.W movq rdx,rbp
0x102cf2902cd0 3f0 498bf0 REX.W movq rsi,r8
0x102cf2902cd3 3f3 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x102cf2902cd8 3f8 48b81068830001000000 REX.W movq rax,0x100836810
0x102cf2902ce2 402 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf2902ce9 409 49ba7811011001000000 REX.W movq r10,0x110011178
0x102cf2902cf3 413 4d8912 REX.W movq [r10],r10
0x102cf2902cf6 416 49ba7011011001000000 REX.W movq r10,0x110011170
0x102cf2902d00 420 49892a REX.W movq [r10],rbp
0x102cf2902d03 423 ffd0 call rax
0x102cf2902d05 425 4c8b15ecffffff REX.W movq r10,[rip+0xffffffec]
0x102cf2902d0c 42c 49c70200000000 REX.W movq [r10],0x0
0x102cf2902d13 433 488b2424 REX.W movq rsp,[rsp]
0x102cf2902d17 437 4885c0 REX.W testq rax,rax
0x102cf2902d1a 43a 0f8579000000 jnz 0x102cf2902d99 <+0x4b9>
0x102cf2902d20 440 4883ec10 REX.W subq rsp,0x10
0x102cf2902d24 444 488b75e0 REX.W movq rsi,[rbp-0x20]
0x102cf2902d28 448 488b7de8 REX.W movq rdi,[rbp-0x18]
0x102cf2902d2c 44c 482bfe REX.W subq rdi,rsi
0x102cf2902d2f 44f 488b5df0 REX.W movq rbx,[rbp-0x10]
0x102cf2902d33 453 48f7db REX.W negq rbx
0x102cf2902d36 456 488d441fff REX.W leaq rax,[rdi+rbx*1-0x1]
0x102cf2902d3b 45b 488945b8 REX.W movq [rbp-0x48],rax
0x102cf2902d3f 45f 49b8a12890f22c100000 REX.W movq r8,0x102cf29028a1 ;; object: 0x102cf29028a1 <Code REGEXP>
0x102cf2902d49 469 837df000 cmpl [rbp-0x10],0x0
0x102cf2902d4d 46d 7507 jnz 0x102cf2902d56 <+0x476>
0x102cf2902d4f 46f ba0a000000 movl rdx,0xa
0x102cf2902d54 474 eb05 jmp 0x102cf2902d5b <+0x47b>
0x102cf2902d56 476 0fb6543eff movzxbl rdx,[rsi+rdi*1-0x1]
0x102cf2902d5b 47b 488945b0 REX.W movq [rbp-0x50],rax
0x102cf2902d5f 47f 488945a8 REX.W movq [rbp-0x58],rax
0x102cf2902d63 483 488b4d10 REX.W movq rcx,[rbp+0x10]
0x102cf2902d67 487 e979fbffff jmp 0x102cf29028e5 <+0x5>
0x102cf2902d6c 48c 488b55f0 REX.W movq rdx,[rbp-0x10]
0x102cf2902d70 490 488b5dd8 REX.W movq rbx,[rbp-0x28]
0x102cf2902d74 494 488b4de0 REX.W movq rcx,[rbp-0x20]
0x102cf2902d78 498 482b4de8 REX.W subq rcx,[rbp-0x18]
0x102cf2902d7c 49c 4803ca REX.W addq rcx,rdx
0x102cf2902d7f 49f 488b45b0 REX.W movq rax,[rbp-0x50]
0x102cf2902d83 4a3 4803c1 REX.W addq rax,rcx
0x102cf2902d86 4a6 8903 movl [rbx],rax
0x102cf2902d88 4a8 488b45a8 REX.W movq rax,[rbp-0x58]
0x102cf2902d8c 4ac 4803c1 REX.W addq rax,rcx
0x102cf2902d8f 4af 894304 movl [rbx+0x4],rax
0x102cf2902d92 4b2 48c7c001000000 REX.W movq rax,0x1
0x102cf2902d99 4b9 488b5dc8 REX.W movq rbx,[rbp-0x38]
0x102cf2902d9d 4bd 488be5 REX.W movq rsp,rbp
0x102cf2902da0 4c0 5d pop rbp
0x102cf2902da1 4c1 c3 retl
0x102cf2902da2 4c2 48a1c81e011001000000 REX.W movq rax,(0x110011ec8)
0x102cf2902dac 4cc 483be0 REX.W cmpq rsp,rax
0x102cf2902daf 4cf 0f8705000000 ja 0x102cf2902dba <+0x4da>
0x102cf2902db5 4d5 e80c000000 call 0x102cf2902dc6 <+0x4e6>
0x102cf2902dba 4da 486319 REX.W movsxlq rbx,[rcx]
0x102cf2902dbd 4dd 4883c104 REX.W addq rcx,0x4
0x102cf2902dc1 4e1 4903d8 REX.W addq rbx,r8
0x102cf2902dc4 4e4 ffe3 jmp rbx
0x102cf2902dc6 4e6 4c290424 REX.W subq [rsp],r8
0x102cf2902dca 4ea 51 push rcx
0x102cf2902dcb 4eb 57 push rdi
0x102cf2902dcc 4ec 4989e2 REX.W movq r10,rsp
0x102cf2902dcf 4ef 4883ec08 REX.W subq rsp,0x8
0x102cf2902dd3 4f3 4883e4f0 REX.W andq rsp,0xf0
0x102cf2902dd7 4f7 4c891424 REX.W movq [rsp],r10
0x102cf2902ddb 4fb 488bd5 REX.W movq rdx,rbp
0x102cf2902dde 4fe 498bf0 REX.W movq rsi,r8
0x102cf2902de1 501 488d7c24f8 REX.W leaq rdi,[rsp-0x8]
0x102cf2902de6 506 488b05edfeffff REX.W movq rax,[rip+0xfffffeed]
0x102cf2902ded 50d 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf2902df4 514 4c8b15f0feffff REX.W movq r10,[rip+0xfffffef0]
0x102cf2902dfb 51b 4d8912 REX.W movq [r10],r10
0x102cf2902dfe 51e 4c8b15f3feffff REX.W movq r10,[rip+0xfffffef3]
0x102cf2902e05 525 49892a REX.W movq [r10],rbp
0x102cf2902e08 528 ffd0 call rax
0x102cf2902e0a 52a 4c8b15e7feffff REX.W movq r10,[rip+0xfffffee7]
0x102cf2902e11 531 49c70200000000 REX.W movq [r10],0x0
0x102cf2902e18 538 488b2424 REX.W movq rsp,[rsp]
0x102cf2902e1c 53c 4885c0 REX.W testq rax,rax
0x102cf2902e1f 53f 0f8574ffffff jnz 0x102cf2902d99 <+0x4b9>
0x102cf2902e25 545 49b8a12890f22c100000 REX.W movq r8,0x102cf29028a1 ;; object: 0x102cf29028a1 <Code REGEXP>
0x102cf2902e2f 54f 5f pop rdi
0x102cf2902e30 550 59 pop rcx
0x102cf2902e31 551 488b75e0 REX.W movq rsi,[rbp-0x20]
0x102cf2902e35 555 4c010424 REX.W addq [rsp],r8
0x102cf2902e39 559 c3 retl
0x102cf2902e3a 55a 4c290424 REX.W subq [rsp],r8
0x102cf2902e3e 55e 56 push rsi
0x102cf2902e3f 55f 57 push rdi
0x102cf2902e40 560 4989e2 REX.W movq r10,rsp
0x102cf2902e43 563 4883ec08 REX.W subq rsp,0x8
0x102cf2902e47 567 4883e4f0 REX.W andq rsp,0xf0
0x102cf2902e4b 56b 4c891424 REX.W movq [rsp],r10
0x102cf2902e4f 56f 488bf9 REX.W movq rdi,rcx
0x102cf2902e52 572 488d7510 REX.W leaq rsi,[rbp+0x10]
0x102cf2902e56 576 48ba0080001001000000 REX.W movq rdx,0x110008000
0x102cf2902e60 580 48b8e0435c0001000000 REX.W movq rax,0x1005c43e0
0x102cf2902e6a 58a 4c8d1500000000 REX.W leaq r10,[rip+0x0]
0x102cf2902e71 591 4c8b1573feffff REX.W movq r10,[rip+0xfffffe73]
0x102cf2902e78 598 4d8912 REX.W movq [r10],r10
0x102cf2902e7b 59b 4c8b1576feffff REX.W movq r10,[rip+0xfffffe76]
0x102cf2902e82 5a2 49892a REX.W movq [r10],rbp
0x102cf2902e85 5a5 ffd0 call rax
0x102cf2902e87 5a7 4c8b156afeffff REX.W movq r10,[rip+0xfffffe6a]
0x102cf2902e8e 5ae 49c70200000000 REX.W movq [r10],0x0
0x102cf2902e95 5b5 488b2424 REX.W movq rsp,[rsp]
0x102cf2902e99 5b9 4885c0 REX.W testq rax,rax
0x102cf2902e9c 5bc 0f8414000000 jz 0x102cf2902eb6 <+0x5d6>
0x102cf2902ea2 5c2 488bc8 REX.W movq rcx,rax
0x102cf2902ea5 5c5 49b8a12890f22c100000 REX.W movq r8,0x102cf29028a1 ;; object: 0x102cf29028a1 <Code REGEXP>
0x102cf2902eaf 5cf 5f pop rdi
0x102cf2902eb0 5d0 5e pop rsi
0x102cf2902eb1 5d1 4c010424 REX.W addq [rsp],r8
0x102cf2902eb5 5d5 c3 retl
0x102cf2902eb6 5d6 48c7c0ffffffff REX.W movq rax,0xffffffff
0x102cf2902ebd 5dd e9d7feffff jmp 0x102cf2902d99 <+0x4b9>

RelocInfo (size = 15)
0x102cf290294a full embedded object (0x164deba8c6d1 <ByteArray[128]>)
0x102cf2902cb6 full embedded object (0x102cf29028a1 <Code REGEXP>)
0x102cf2902d41 full embedded object (0x102cf29028a1 <Code REGEXP>)
0x102cf2902e27 full embedded object (0x102cf29028a1 <Code REGEXP>)
0x102cf2902ea7 full embedded object (0x102cf29028a1 <Code REGEXP>)

2

</code></pre>

</details>
