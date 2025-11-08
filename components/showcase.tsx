import { Card } from "@/components/ui/card"

export function Showcase() {
  return (
    <section className="py-32 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            Your Feed. Reinvented.
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Posts, pictures, and conversations displayed with effortless simplicity — it feels natural, quiet, and
            beautiful.
          </p>
        </div>

        <Card className="bg-card/30 backdrop-blur-sm border-muted overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-8 bg-gradient-to-br from-background via-card to-background">
            <div className="font-mono text-xs sm:text-sm space-y-2">
              {/* Terminal header */}
              <div className="flex items-center gap-2 pb-4 border-b border-muted">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-primary/70" />
                </div>
                <span className="text-muted-foreground ml-4">tuitter@terminal ~ timeline</span>
              </div>

              {/* Terminal content */}
              <div className="pt-4 space-y-6 text-foreground/90">
                <div className="space-y-2">
                  <div className="text-secondary">@iloveburg3rsz</div>
                  <div>I could never abuse substances. I love substances 😭</div>
                  <div className="flex gap-4 text-xs text-muted-foreground pt-2">
                    <span className="text-destructive">❤ 45</span>
                    <span className="text-primary">🔄 7</span>
                    <span className="text-secondary">💬 10</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-primary">@jorstors</div>
                  <div>hampter</div>
                  <div className="pl-4 border-l-2 border-primary/30 mt-2 overflow-x-hidden overflow-y-hidden">
                    <pre className="text-[8px] leading-[0.6] text-muted-foreground/60 leading-snug">{`
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                                                                                                      
                                                                      .:^^^^^^^^^^^^^^^^:.                                                            
                                                                    .!?~                .^~!:                                                         
                                                                   ^J^                     :~~:                                                       
                                                                  ~J                          :~:                                                     
                                                                ~G.                             .~:                                                   
                                                               JJ: :!JY^                          .^^                                                 
                                                             :~::^7#@@&&&P.                    :J7^.~Y.                                               
                                                           .J: J:!#@@@&&@@~                   .JPB&&GY~!.                                             
                                                          .G?~?JPG!!P5?:YG.                  .5Y:Y&&#@#!~:                                            
                                                          G77Y.:7~^^~.^^ .^                 .5~^777~:Y5G:^7                                           
                                                         ^BJ7. ^:                               .^   .^!~^J#?                                         
                                                         ^&!                                              .:5J                                        
                                                        .!Y                                                  !?                                       
                                                       !Y:                    ......                          ^?                                      
                                                     ^~.   ?^               ..:::::.                           :?                                     
                                                    ~~   !P^               ..:::::::.                          ^!?.                                   
                                                  :?^.^~~!                7^:..:::....                         ~?.?.                                  
                                                 !YP!:.                   ^77Y~:::^!Y!^                        ~J .J^                                 
                                               .!!J#:                       .^~^.:~^:                         .5^  .P:                                
                                             :J~  J&~         .!                               .  ..         !!     .?:                               
                                           .JY:    JJ      ..J7     .:!7777777!!!!7~........     .::^~^.    7!        ?^                              
                                         :~:.      ^?    ~J5~G5.:75B&@@@@@@@@@:..75.  .&@@&#GGJ~^  :. :.   .5.         ?^                             
                                       ^~.                   ?&&@@@@@@@@@@@@@&   ^J   P@@@@@@@@@@&G5Y#5~~:              ??                            
                                      57                     P@@@@@@@@@@@@@@@@7  ~J   B@@@@@@@@@@@@@&&.                  ^!.                          
                                    :!^                      J@@@@@@@@@@@@@@@@B  ^J   #@@@@@@@@@@@@@@&.                   .7^                         
                                   ^J.                       7@@@@@@@@@@@@@@@@B  !J  ?@@@@@@@@@@@@@@@?                      ~P.                       
                                 ^~.                          B@@@@@@@@@@@@@@@@GB@&GG&@@@@@@@@@@@@@@@^                       ^Y.                      
                               .?.                            .&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&!.                        .Y.                     
                              ~!                               !@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@5                           :J                     
                            .?:                                 7&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&Y.                            :J                    
                           ?7                                    ~&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@7                               77                   
                          :P                                      ~&@@@@@@@@@@@@@@@@@@@@@@@@@@@@G                                 ?7                  
                          5.                                      .~B@@@@@@@@@@@@@@@@@@@@@@@@@@G:                                  ^!.                
                         ~7                                         :#@@@@@@@@@@@@@@@@@@@@@@@G!.                                    .!^               
                        ^J                                           .5@@@@@@@@@@@@@@@@@@@@@&:                                        !7              
                       .?.                                            .Y&#G#&&&&&&&@@@@@@@@P~.                                         J^             
                       5.                                              .:JGY~^:::::~!75#@&Y.                                           .Y.            
                      ?^                                                 .^!JY???YY75??YY^.                                             7~            
                     ^J                                                     ....::^^^:...                                                5.           
                     J:                                                                                                                  :Y           
                    .P                                                                                                                    !7          
                    ?:                                                                                                                     7~         
                    5.                                                                                                                      Y.        
                    5.                                                                       .^^:                                           .Y        
                    5.                                 ..   .J^                             ?~....                                           !?       
                    5.                                 ~~~~:  P.                            !J~~~~^                                          .J.      
                    5.                                     :?:P.                                                                              75      
                    5.                                      .7:                                                                                G.     
                    ^J                                                                                                                         ^?     
                     77                                                                                                                        .5     
                     .Y~                                                                                                                        J.     
`}</pre>
                  </div>
                  <div className="flex gap-4 text-xs text-muted-foreground pt-2">
                    <span className="text-destructive">❤ 128</span>
                    <span className="text-primary">🔄 13</span>
                    <span className="text-secondary">💬 5</span>
                  </div>
                </div>

                <div className="h-px bg-muted" />

                <div className="space-y-2">
                  <div className="text-secondary">@techwriter</div>
                  <div>Just discovered Tuitter. Finally, social media that respects my attention.</div>
                  <div className="flex gap-4 text-xs text-muted-foreground pt-2">
                    <span className="text-destructive">❤ 12</span>
                    <span className="text-primary">🔄 3</span>
                    <span className="text-secondary">💬 2</span>
                  </div>
                </div>

                <div className="h-px bg-muted" />

                <div className="animate-pulse text-muted-foreground">Loading more posts...</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
