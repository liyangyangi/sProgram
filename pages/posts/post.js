Page({
    data:{
        postDdata:"2018 4 24",
        post_key:{
            
        }
    },
    process:function(option){
        
    },
    onLoad:function(option){
        let post_content = [
            {
                time:"2017 2 24",
                title:'11111',
                content:"第一条信息"
            },
            {
                time:"2018 2 24",
                title:'22222',
                content:"第二条信息"
            }
        ];
        this.setData({
            post_key:post_content
        });
    },
    onReady:function(option){
        
    },
    onShow:function(option){
        
    },
    onHide:function(option){
        
    },
    onUnload:function(option){
        
    }
})