# 클러스터 고가용성(HA) 관리

단일 클러스터 설치는 쉽지만 노드가 손실되면 문제가 발생한다. 만약 Controlplane 노드를 사용할 수 없게되면 Worker 노드에서 실행 중인 ReplicaSet은 