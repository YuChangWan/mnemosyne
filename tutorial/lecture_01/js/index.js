var game=new RAIN_DROP(),
	mne=new MNEMOSYNE();

game.outside_input=act;	//�������� ���� ������ ���¸� ���޹ް�, �� ���¿� ����, ���ӿ� agent�� �ൿ�� ����
game.outside_output=response;	//�������κ��� agent�� �ൿ ����� �׿� ���� ������ ���� ����

var direction=-1,
	action_list=[];
	
function act(ar){
	//0 - ����, 1 - ������ �̵�, -1 - ���� �̵�
	var action=direction;
	
	//�ϸ��ôϿ��� �Ǵ��� ���ϴ� �κ�///////////////////////
	if(action_list.length==0) action_list=mne.think(ar);//
	////////////////////////////////////////////////////////
	
	if(action_list.length>0) return action_list.shift();
	else return action;
	
};
function response(ar,pail_status){
	
	if(pail_status=="right end") direction=-1;
	else if(pail_status=="left end") direction=1;
	
	mne.record(ar);
};


