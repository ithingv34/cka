# 시험 필수개념 및 예상문제


### 출제 유형


#### Cluster Architecture, Installation & Configuration (25%)

쿠버네티스 클러스터와 관련된 전반적인 개념을 다룬다. 유지보수, 설치 및 업그레이드, 고가용성 설정 및 쿠버네티스 클러스터의 기본적인 아키텍처를 이해할 수 있어야 한다. 밑바닥부터 클러스터를 `설치`, `업그레이드` 하고 etcd 데이터베이스를 `백업`, `복구` 하는 과정을 이해하고 적용할 수 있어야 한다. 그리고 `RBAC(Role based access control)` 에 대한 이해도 중요하다. 

- RBAC(Role base access control) 관리
- Kubeadm을 사용하여 클러스터 설치하기
- 쿠버네티스 클러스터 고가용성 관리
- 쿠버네티스 클러스터 배포를 위한 기반 인프라스트럭쳐 프로비저닝
- kubeadm을 사용하여 쿠버네티스 클러스터 버전 업그레이드
- Etcd 백업 & 복구

---
#### Workloads & Scheduling (15%)

쿠버네티스 관리자는 클라우드 네이티브 어플리케이션 활용을 위한 쿠버네티스의 전반적인 개념을 잘 이해해야한다. `Deployments`, `ReplicaSets` 그리고 `ConfigMaps`, `Secret`과 같은 데이터 설정에 익숙해야한다. 

새로운 `Pod`를 생성할 때, 쿠버네티스 스케줄러는 사용 가능한 노드에 개체를 할당하기 때문에 `Node affinity`, `taints/toleration` 제어에 관한 스케줄링 규칙을 이해해야한다. 

- deploments에 대한 이해와 update, rollback 방법
- 어플리케이션 설정을 위한 ConfigMap, Secret 이해
- 스케일링 방법
- Pod 스케줄링에 영향을 미치는 리소스 관리방법 이해
- Manifest 관리 및 템플릿 툴(`Helm`, `Kustomize`)에 대한 이해

---
#### Services & Networking (20%)

클라우드 네이티브 마이크로서비스는 대부분의 경우 네트워크를 통한 통신으로 다른 마이크로서비스 혹은 외부 시스템과 상호작용한다. Pod to Pod 커뮤니케이션, 클러스터 외부에 어플리케이션을 노출시키고 시스템이 기능하는데 필요한 클러스터 네트워킹을 설정하는 역량이 매우 중요하다. 

- 클러스터 노드에 host networking 설정 이해
- Pod to Pod connection에 대한 이해
- ClusterIP, NodePort, LoadBalancer 서비스 타입과 엔트포인트에 대한 이해
- Ingress Controller와 Ingress resource을 어떻게 사용하는지 이해하기
- CoreDNS를 어떻게 설정하고 사용하는지 이해하기
- 적합한 컨테이너 네트워크 인터페이스(CNI) 플러그인 선택하기

---
#### Storage (10%)

데이터를 읽고 저장하는데 필요한 여러가지 유형의 볼륨을 다루는 섹션이다. 관리자로써 이것을 어떻게 생성하고 설정하는지 이해하는 것이 중요하다. `Persistent volume`은 클러스터 노드가 재시작 하더라도 데이터 영속성을 보장한다. 컨테이너의 경로에 볼륨을 마운트하는 방법을 이해하고 적용할 수 있어야한다. 그리고 `Static Binding`과 `Dynamic Binding`을 이해해야한다.

- storage class와 persistent volume에 대한 이해
- olume mode, access modes and reclaim policies for volumes에 대한 이해
- persistent volume claims primitive에 대한 이해
- 어플리케이션에 persistent storage를 설정하는 방법에 대한 이해

---
#### TroubleShooting (30%)
어플리케이션이 의도하지 않게 동작하는 경우 혹은 장애시에 쿠버네티스 관리자는 문제를 진단하고 빠르게 해결하는 트러블슈팅 역량이 필요하다. 

- 클러스터와 노드의 log 확인하기
- 어플리케이션 모니터링 방법에 대한 이해
- 컨테이너 stdout & stderr log 관리
- 어플리케이션 장애 트러블슈팅
- 클러스터 컴포넌트 장애 트러블슈팅
- 네트워크 장애 트러블슈팅


### 빈출유형

- [ETCD 백업 및 복구]()
- [Pod 생성하기]()
- [Static Pod 생성하기]()
- [Multi Container Pod 생성하기]()
- [SideCar Container Pod 생성하기]()
- [Deployment & Pod Scale]()
- [RollingUpdate & Rollback]()
- [NodeSelector]()
- [Node Management]()
- [Node Monitoring]()
- [Deployment & Service Expose]()
- [Pod의 Log 추출하기]()
- [CPU 사용량이 높은 Pod 검색하기]()
- [init 컨테이너를 포함한 Pod 운영]()
- [NodePort 서비스 생성]()
- [ConfigMap 운영]()
- [Secret 운영]()
- [Ingress 구성]()
- [Persistent Volume 생성]()
- [Persistent Volume Claim을 사용하는 Pod 운영]()
- [Check Resource Information]() 